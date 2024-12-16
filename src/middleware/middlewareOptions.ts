import { GetMiddlewareOptions } from 'apollo-server-express/src/ApolloServer';

const methods: string[] = ['POST', 'OPTIONS'];

const middlewareOptions: GetMiddlewareOptions = {
    cors: {
        methods,
        origin: /.+/,
        credentials: true,
    },
};

export default middlewareOptions;
