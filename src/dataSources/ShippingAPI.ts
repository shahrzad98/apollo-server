import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class ShippingAPI extends RESTDataSource {
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

    getShippingMethods = async (param) => {
        return this.get(`${URLS.SHIPPING.SHIPPINGS}${this.context.storeId}/`, param);
    };

    getShippingMethodDetail = async ({ id }) => {
        return this.get(`${URLS.SHIPPING.SHIPPINGS}${this.context.storeId}/${id}/`);
    };

    getProvincesCities = async (param) => {
        return this.get(`${URLS.SHIPPING.CITIES}`, param);
    };

    createNewShipping = async (content) => {
        return this.post(`${URLS.SHIPPING.SHIPPINGS}${this.context.storeId}/`, content);
    };

    editShipping = async (content, id) => {
        return this.patch(`${URLS.SHIPPING.SHIPPINGS}${this.context.storeId}/${id}/`, content);
    };

    deleteShipping = async ({ id }) => {
        return this.delete(`${URLS.SHIPPING.SHIPPINGS}${this.context.storeId}/${id}/`);
    };

    getNeshanCity = async (param) => {
        return this.get(`${URLS.SHIPPING.GET_NESHAN_CITY}`, param, {
            headers: {
                'Api-Key': 'service.5YhEZldGdTDa1l7F3U9wOkFkmjztKXGsMRyiD8nS',
            },
        });
    };

    getDigiExpressActiveCities = async () => {
        return this.get(`${URLS.SHIPPING.DIGIEXPRESS_ACTIVE_CITIES}`);
    };

    sendPostexSms = async () => {
        return this.get(`${URLS.SHIPPING.POSTEX_SMS}${this.context.storeId}/get_postex_password/`);
    };
}

export default ShippingAPI;
