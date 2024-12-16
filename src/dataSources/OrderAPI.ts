import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class OrderAPI extends RESTDataSource {
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

    getManagers = async (params) => {
        return this.get(`${URLS.ORDER.MANAGER}${this.context.storeId}/`, params);
    };

    getManager = async (id) => {
        return this.get(`${URLS.ORDER.MANAGER}${this.context.storeId}/${id}/`);
    };

    updateManager = async (id, content) => {
        return this.put(`${URLS.ORDER.MANAGER}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateManager = async (id, content) => {
        return this.patch(`${URLS.ORDER.MANAGER}${this.context.storeId}/${id}/`, content);
    };

    updateManagerReceiveStatus = async (id, content) => {
        return this.put(`${URLS.ORDER.MANAGER}${this.context.storeId}/${id}/update-receive-status/`, content);
    };

    getManagersFilterPrimaries = async () => {
        return this.get(`${URLS.ORDER.MANAGER}${this.context.storeId}/get_filter_primaries/`);
    };

    getManagersStatusCount = async () => {
        return this.get(`${URLS.ORDER.MANAGER}${this.context.storeId}/order_status_count/`);
    };

    getOrderStatus = async (id) => {
        return this.get(`${URLS.ORDER.STATUS}${this.context.storeId}/${id}/`);
    };

    updateOrderStatus = async (id, content) => {
        return this.put(`${URLS.ORDER.STATUS}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateOrderStatus = async (id, content) => {
        return this.patch(`${URLS.ORDER.STATUS}${this.context.storeId}/${id}/`, content);
    };

    //Post
    getPostCartoonsInsurances = async () => {
        return this.get(`${URLS.ORDER.POST}${this.context.storeId}/get_cartoons_insurances/`);
    };

    getPostProvincesCities = async (params) => {
        return this.get(`${URLS.ORDER.POST}${this.context.storeId}/get_provinces_cities/`, params);
    };

    //Postex
    getPostexInfo = async () => {
        return this.get(`${URLS.ORDER.POSTEX}${this.context.storeId}/postex_info/`);
    };

    partialUpdatePostexInfo = async (content) => {
        return this.patch(`${URLS.ORDER.POSTEX}${this.context.storeId}/postex_info/`, content);
    };

    getOrderSend = async (id) => {
        return this.get(`${URLS.ORDER.SEND}${this.context.storeId}/${id}/`);
    };

    updateOrderSend = async (id, content) => {
        return this.put(`${URLS.ORDER.SEND}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateOrderSend = async (id, content) => {
        return this.patch(`${URLS.ORDER.SEND}${this.context.storeId}/${id}/`, content);
    };
    getPostexPassword = async () => {
        return this.get(`${URLS.ORDER.POSTEX}${this.context.storeId}/get_postex_password/`);
    };
    getOrdersBrief = async (params) => {
        return this.get(`${URLS.ORDER.BRIEF}${this.context.storeId}/`, params);
    };
    cancelShipping = async (id) => {
        return this.put(`${URLS.ORDER.SEND}${this.context.id}/${id}/cancel-shipping/`);
    };
    chargeAloPeykWallet = async (content) => {
        return this.post(`${URLS.ORDER.CHARGE_SHIPPING_WALLET}${this.context.storeId}/`, content);
    };
}

export default OrderAPI;
