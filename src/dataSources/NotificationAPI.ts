import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class NotificationAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.baseApiUrl;
    }

    willSendRequest = (request: RequestOptions) => {
        request.headers.set('authorization', this.context.token);

        const xForwardedFor = this.context.req.headers['x-forwarded-for'];
        const remoteAddress = this.context.req?.socket?.remoteAddress;

        const acceptLanguage = this.context.acceptLanguage;
        if (acceptLanguage) request.headers.set('accept-language', acceptLanguage);
        if (xForwardedFor) request.headers.set('x-forwarded-for', xForwardedFor);
        if (remoteAddress) request.headers.set('remote-address', remoteAddress);

        if (this.context?.origin) request.headers.set('Origin', this.context.origin);
        if (this.context?.referer) request.headers.set('Referer', this.context.referer);
    };

    getToken = async () => {
        return this.post(`${URLS.NOTIFICATION.TOKEN}${this.context.storeId}/`);
    };
    getTokenPanel = () => {
        return this.post(`${URLS.NOTIFICATION.GET_TOKEN}${this.context.storeId}/`);
    };
    getBusinessWsToken = () => {
        return this.post(`${URLS.NOTIFICATION.BUSINESS_TOKEN}`);
    };
    seenNotif = async (id: string) => {
        return this.post(`${URLS.NOTIFICATION.SEEN_OR_DELETE}${this.context.storeId}/`, {
            seen: [id],
        });
    };

    deleteNotif = async (ids: string[]) => {
        return this.post(`${URLS.NOTIFICATION.SEEN_OR_DELETE}${this.context.storeId}/`, {
            delete: ids,
        });
    };
}

export default NotificationAPI;
