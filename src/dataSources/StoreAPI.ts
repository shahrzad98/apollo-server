import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class StoreAPI extends RESTDataSource {
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

    getBrands = async (params) => {
        return this.get(URLS.STORE.SUPPORT.BRAND, params);
    };
    getHomeData = async () => {
        return this.get(`${URLS.STORE.HOME}${this.context.storeId}/`);
    };
    editStoreData = async (content) => {
        return this.patch(`${URLS.STORE.STORE}${this.context.storeId}/`, content);
    };
    getStores = async (params) => {
        return this.get(URLS.STORE.STORES, params);
    };
    getStoreDetail = async (storeId) => {
        return this.get(`${URLS.STORE.STORES}${storeId}/`);
    };
    getStoreServiceDetail = async (storeId) => {
        return this.get(`${URLS.STORE.STORES}${storeId}/services_detail/`);
    };
    updateStoreServiceDetail = async (storeId, content) => {
        return this.put(`${URLS.STORE.STORES}${storeId}/services_detail/`, content);
    };
    getSmsData = async () => {
        return this.get(`${URLS.STORE.SMS}${this.context.brandId}`);
    };
    patchSmsData = async (content) => {
        return this.patch(`${URLS.STORE.SMS}${this.context.brandId}/`, content);
    };
    getWalletData = async () => {
        return this.get(`${URLS.STORE.WALLET}${this.context.storeId}/wallet-balance/`);
    };
    chargeWallet = async (content) => {
        return this.post(`${URLS.STORE.WALLET}${this.context.storeId}/deposit/`, content);
    };
    updateCustomDomain = async ({ storeId, domain }) => {
        return this.put(`${URLS.STORE.DOMAIN}${storeId}/set_custom_domain/`, { custom_domain: domain });
    };
    getStorePassword = async (phoneNumber) => {
        return this.get(`${URLS.STORE.PASSWORD}${phoneNumber}/`);
    };
    adminChargeWallet = async (content) => {
        return this.post(`${URLS.STORE.WALLET_SUPPORT_DEPOSIT}/`, content);
    };
    importDigikalaProducts = async ({ storeId, seller_id }) => {
        return this.post(`${URLS.STORE.IMPORT_DIGIKALA_PRODUCTS}${storeId}/`, { seller_id });
    };
    activateTorob = async (params) => {
        return this.post(`${URLS.STORE.ACTIVATE_TOROB}`, params);
    };
    exportStoresExcel = async (params) => {
        return this.get(`${URLS.STORE.EXPORT_STORES_EXCEL}`, params);
    };
    getStatistics = async (params) => {
        return this.get(`${URLS.STORE.STATISTICS}`, params);
    };
}

export default StoreAPI;
