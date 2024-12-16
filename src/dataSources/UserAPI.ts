import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import URLS from '../constant/URLS';
import config from '../config';
import { AuthenticationError } from 'apollo-server-core';

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.baseApiUrl;
    }

    willSendRequest = (request: RequestOptions) => {
        request.headers.set('authorization', this.context.token);

        const acceptLanguage = this.context.acceptLanguage;
        if (acceptLanguage) request.headers.set('accept-language', acceptLanguage);

        const xForwardedFor = this.context.req.headers['x-forwarded-for'];
        const remoteAddress = this.context.req?.socket?.remoteAddress;

        if (xForwardedFor) request.headers.set('x-forwarded-for', xForwardedFor);
        if (remoteAddress) request.headers.set('remote-address', remoteAddress);

        if (this.context?.origin) request.headers.set('Origin', this.context.origin);
        if (this.context?.referer) request.headers.set('Referer', this.context.referer);
    };

    getToken = async ({ username, password }) => {
        return this.post(URLS.USER.TOKEN, { username, password });
    };

    getCookie = async ({ username, password }) => {
        const { cookies, res } = this.context;

        if (!cookies.access && !cookies.refresh) {
            const response = await this.post(URLS.USER.TOKEN, { username, password });

            if (response) {
                res.cookie('access', response.access, {
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: !config.isEnvDevelopment,
                    domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                    maxAge: 10800000,
                });
                res.cookie('refresh', response.refresh, {
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: !config.isEnvDevelopment,
                    domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                    maxAge: 86400000,
                });
            }
            return response;
        }
        return {
            access: cookies.access,
            refresh: cookies.refresh,
        };
    };

    getRefreshToken = async (content) => {
        return this.post(URLS.USER.REFRESH_TOKEN, content);
    };

    userCheck = async (phoneNumber) => {
        return this.get(`${URLS.USER.CHECK}${phoneNumber}/`);
    };

    getUserInfo = async () => {
        const { cookies } = this.context;
        if (!cookies.access) {
            throw new AuthenticationError('Authentication error');
        }
        return this.get(URLS.USER.INFO);
    };

    getUserRead = async () => {
        const response = await this.get(URLS.USER.READ);
        const { res } = this.context;
        res.cookie('store-id', response.my_store[0].id, {
            // httpOnly: true,
            sameSite: 'strict',
            secure: config.isEnvProduction,
            maxAge: 86400000,
        });
        res.cookie('brand-id', response.my_brand.id, {
            // httpOnly: true,
            sameSite: 'strict',
            secure: config.isEnvProduction,
            maxAge: 86400000,
        });
        return response;
    };

    clearCookie = async () => {
        const { cookies, res } = this.context;
        // const domain = getExactDomain(req.headers.origin);
        if (cookies.access || cookies.refresh) {
            res.cookie('access', '', {
                httpOnly: true,
                sameSite: 'lax',
                secure: !config.isEnvDevelopment,
                domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                maxAge: -60000,
            });
            res.cookie('refresh', '', {
                httpOnly: true,
                sameSite: 'lax',
                secure: !config.isEnvDevelopment,
                domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                maxAge: -60000,
            });
            res.clearCookie('access');
            res.clearCookie('refresh');
            res.clearCookie('store-id');
            res.clearCookie('brand-id');
        }
    };
}

export default UserAPI;
