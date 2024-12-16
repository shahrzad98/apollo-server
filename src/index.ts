import express from 'express';
import { createServer } from 'http';
import schema from './graphql';
import { ApolloServer } from 'apollo-server-express';
import config from './config';
import dataSources from './dataSources';
import { execute, GraphQLError, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import bodyParser from 'body-parser';
import { graphqlUploadExpress } from 'graphql-upload';
import middlewareOptions from './middleware/middlewareOptions';
import cookieParser from 'cookie-parser';
import getRefreshToken from './api/getRefreshToken';

(async () => {
    const app = express();

    app.use(cookieParser());
    app.use('/graphql', bodyParser.json());
    app.use(graphqlUploadExpress());

    const apolloServer = new ApolloServer({
        schema,
        dataSources: () => dataSources(),
        context: async ({ req, res }) => {
            console.log(
                `%c >>> ${req.body.operationName} >>> ${req.headers.referer ? 'Client' : 'Server'}`,
                'background: #fff; color: #000; padding: 3px; border-radius: 5px',
            );

            const {
                cookies,
                headers: { authorization, storeid: headerStoreId, 'accept-language': acceptLanguage },
            } = req;

            let token;
            const storeId = headerStoreId || cookies['store-id'];
            const brandId = cookies['brand-id'];
            if (!cookies.access && cookies.refresh) {
                const response = await getRefreshToken({ refresh: cookies.refresh });
                if (response?.data) {
                    token = 'Bearer ' + response.data.access;
                    res.cookie('access', response.data.access, {
                        httpOnly: true,
                        sameSite: 'lax',
                        secure: !config.isEnvDevelopment,
                        domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                        maxAge: 10800000,
                    });
                }
            }

            if (authorization?.length) token = authorization;
            else if (cookies?.access?.length) token = 'Bearer ' + cookies?.access;

            return {
                cookies,
                token,
                storeId,
                res,
                brandId,
                req,
                origin: req.headers?.origin,
                referer: req.headers?.referer,
                acceptLanguage,
            };
        },
        formatError: (e: GraphQLError): any => {
            if (config.isEnvProduction) {
                return JSON.parse(JSON.stringify(e).split(config.baseApiUrl).join('/'));
            }
            return e;
        },
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        ...middlewareOptions,
    });

    const server = createServer(app);

    await server.listen(config.port, () => {
        new SubscriptionServer(
            {
                execute,
                subscribe,
                schema,
            },
            {
                server,
                path: '/subscriptions',
            },
        );
    });

    console.log(`
    > HTTP Server ready at http://localhost:${config.port}/graphql     
    > WS Server ready at ws://localhost:${config.port}/subscriptions
    > REST Datasource url : ${config.baseApiUrl}
    `);
})();
