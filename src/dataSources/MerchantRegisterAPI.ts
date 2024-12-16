import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class MerchantRegisterAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.baseApiUrl;
    }

    willSendRequest = (request: RequestOptions) => {
        const xForwardedFor = this.context.req.headers['x-forwarded-for'];
        const remoteAddress = this.context.req?.socket?.remoteAddress;

        const acceptLanguage = this.context.acceptLanguage;
        if (acceptLanguage) request.headers.set('accept-language', acceptLanguage);

        if (xForwardedFor) request.headers.set('x-forwarded-for', xForwardedFor);
        if (remoteAddress) request.headers.set('remote-address', remoteAddress);

        if (this.context?.origin) request.headers.set('Origin', this.context.origin);
        if (this.context?.referer) request.headers.set('Referer', this.context.referer);
    };

    otpSend = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.OTP_SEND, content);
    };

    validateOtpToken = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.VALIDATE_TOKEN, content);
    };

    createProfile = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.CREATE_PROFILE, content);
    };

    getGuild = async () => {
        return this.get(URLS.MERCHANT_REGISTER.GET_GUILD);
    };

    checkSub = async (sub_domain) => {
        return this.put(URLS.MERCHANT_REGISTER.CHECK_SUB, { sub_domain });
    };
    sendSmsForgetPassword = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.SEND_OTP_FORGET_PASSWORD, content);
    };
    merchantCheckOtp = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.CHECK_OTP, content);
    };
    changePasswordRegister = async (content) => {
        return this.post(URLS.MERCHANT_REGISTER.CHANGE_PASSWORD, content);
    };
}

export default MerchantRegisterAPI;
