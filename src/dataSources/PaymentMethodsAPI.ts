import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';
import rawBody from 'raw-body';
import FormData from 'form-data';
class PaymentMethodsAPI extends RESTDataSource {
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

    getPaymentMethods = async () => {
        return this.get(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/`);
    };
    getPaymentMethod = async (id) => {
        return this.get(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/${id}/`);
    };
    createNewPaymentMethod = async (content) => {
        return this.post(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/`, content);
    };
    createBehPardakht = async (content) => {
        return this.put(`store/profile/${this.context.storeId}/service/`, content);
    };
    editPaymentMethod = async (content, id) => {
        return this.patch(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/${id}/`, content);
    };
    editPaymentMethodPut = async (content, id) => {
        return this.put(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/${id}/`, content);
    };
    deletePaymentMethod = async (id) => {
        return this.delete(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/${id}/`);
    };
    editCardToCard = async (content, id) => {
        return this.put(`${URLS.PAYMENT_METHODS.PAYMENT_METHODS}${this.context.storeId}/${id}/`, content);
    };
    createZarrinPal = async (content) => {
        return this.post(`payment/zarrinpal/${this.context.storeId}/registration/`, content);
    };
    verifyZarrinPalOTP = async (content) => {
        return this.post(`payment/zarrinpal/${this.context.storeId}/otp/verify/`, content);
    };
    getZarrinPalStatus = async () => {
        return this.get(`payment/zarrinpal/${this.context.storeId}/user-info/`);
    };
    chooseExTerminalZarrinpal = async (content) => {
        return this.put(`payment/zarrinpal/${this.context.storeId}/terminal/`, content);
    };
    submitZarrinPalCreation = async () => {
        return this.post(`payment/zarrinpal/${this.context.storeId}/gateway/`);
    };
    uploadZarrinPalDocument = async (files) => {
        const file = await files[0];
        const file2 = await files[1];
        const form = new FormData();

        await rawBody(file.createReadStream()).then((buffer) => {
            form.append('national_card', buffer, {
                filename: file.filename,
                contentType: file.mimetype,
                knownLength: buffer.length,
            });
        });
        await rawBody(file2.createReadStream()).then((buffer) => {
            form.append('selfie', buffer, {
                filename: file.filename,
                contentType: file.mimetype,
                knownLength: buffer.length,
            });
        });
        return this.put(`payment/zarrinpal/${this.context.storeId}/upload/`, form);
    };
}

export default PaymentMethodsAPI;
