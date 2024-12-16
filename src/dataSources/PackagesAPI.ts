import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class PackagesAPI extends RESTDataSource {
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

    getPackages = async (params) => {
        return this.get(URLS.PACKAGES.PACKAGE, params);
    };

    getPackage = async (id) => {
        return this.get(`${URLS.PACKAGES.PACKAGE}${id}/`);
    };

    createPackage = async (content) => {
        return this.post(URLS.PACKAGES.PACKAGE, content);
    };

    deletePackage = async (id, content) => {
        return this.delete(`${URLS.PACKAGES.PACKAGE}${id}/`, content);
    };

    partialUpdatePackage = async (id, content) => {
        return this.patch(`${URLS.PACKAGES.PACKAGE}${id}/`, content);
    };

    updatePackage = async (id, content) => {
        return this.put(`${URLS.PACKAGES.PACKAGE}${id}/`, content);
    };
    getPurchasedPackages = async (params) => {
        return this.get(URLS.PACKAGES.PURCHASED_PACKAGE, params);
    };

    getPurchasedPackage = async (id) => {
        return this.get(`${URLS.PACKAGES.PURCHASED_PACKAGE}${id}/`);
    };

    createPurchasedPackage = async (content) => {
        return this.post(URLS.PACKAGES.PURCHASED_PACKAGE, content);
    };

    deletePurchasedPackage = async (id, content) => {
        return this.delete(`${URLS.PACKAGES.PURCHASED_PACKAGE}${id}/`, content);
    };

    partialUpdatePurchasedPackage = async (id, content) => {
        return this.patch(`${URLS.PACKAGES.PURCHASED_PACKAGE}${id}/`, content);
    };

    updatePurchasedPackage = async (id, content) => {
        return this.put(`${URLS.PACKAGES.PURCHASED_PACKAGE}${id}/`, content);
    };
    getVouchers = async (params) => {
        return this.get(URLS.PACKAGES.VOUCHER_DIGIFY, params);
    };
    createVoucher = async (content) => {
        return this.post(URLS.PACKAGES.VOUCHER, content);
    };
    getVoucher = async (id) => {
        return this.get(`${URLS.PACKAGES.VOUCHER}${id}/`);
    };
    deleteVoucher = async (id, content) => {
        return this.delete(`${URLS.PACKAGES.VOUCHER}${id}/`, content);
    };
    partialUpdateVoucher = async (id, content) => {
        return this.patch(`${URLS.PACKAGES.VOUCHER}${id}/`, content);
    };

    updateVoucher = async (id, content) => {
        return this.put(`${URLS.PACKAGES.VOUCHER}${id}/`, content);
    };
    getSafirs = async (params) => {
        return this.get(URLS.PACKAGES.SAFIR, params);
    };
    createSafir = async (content) => {
        return this.post(URLS.PACKAGES.SAFIR, content);
    };
    getSafir = async (id) => {
        return this.get(`${URLS.PACKAGES.SAFIR}${id}/`);
    };
    deleteSafir = async (id, content) => {
        return this.delete(`${URLS.PACKAGES.SAFIR}${id}/`, content);
    };
    partialUpdateSafir = async (id, content) => {
        return this.patch(`${URLS.PACKAGES.SAFIR}${id}/`, content);
    };

    updateSafir = async (id, content) => {
        return this.put(`${URLS.PACKAGES.SAFIR}${id}/`, content);
    };
    getPackagesBySafir = async (params) => {
        return this.get(URLS.PACKAGES.PURCHASED_PACKAGE, params);
    };
    getPackagesByVoucher = async (params) => {
        return this.get(URLS.PACKAGES.PURCHASED_PACKAGE, params);
    };
    getVouchersOfSafirs = async (params) => {
        return this.get(URLS.PACKAGES.VOUCHER, params);
    };
    checkPackageVoucher = async (params) => {
        return this.get(`${URLS.PACKAGES.CHECK_VOUCHER}`, { ...params, store: this.context.storeId });
    };
    getCurrentPackage = async () => {
        return this.get(`${URLS.PACKAGES.GET_CURRENT_PACKAGE}?store=${this.context.storeId}`);
    };
    buyPackage = async (content) => {
        return this.post(`${URLS.PACKAGES.PURCHASED_PACKAGE}${this.context.storeId}/`, content);
    };
    chargeSms = async (content) => {
        return this.post(`${URLS.PACKAGES.CHARGE_SMS}${this.context.storeId}/`, content);
    };
    getFinancialData = async (params) => {
        return this.get(`${URLS.PACKAGES.FINANCIAL_DATA}${this.context.storeId}/`, params);
    };

    getPurchasePackages = async (params) => {
        return this.get(URLS.PACKAGES.PURCHASED_PACKAGE, params);
    };

    getReservedPackages = async (params) => {
        return this.get(URLS.PACKAGES.PURCHASED_PACKAGE, params);
    };
}

export default PackagesAPI;
