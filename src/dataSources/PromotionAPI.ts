import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class PromotionAPI extends RESTDataSource {
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

    voucherCheck = async (content) => {
        return this.post(`${URLS.PROMOTION.VOUCHER.CHECK}${this.context.storeId}/`, content);
    };
}

export default PromotionAPI;
