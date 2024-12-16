import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';
import rawBody from 'raw-body';
import FormData from 'form-data';
import getRefreshToken from '../api/getRefreshToken';

class CustomerAPI extends RESTDataSource {
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
    //Site Map
    getSitemap = async () => {
        return this.get(`${URLS.CUSTOMER.SITEMAP}${this.context.storeId}/`);
    };
    //get shipping sokect
    getShippingSokect = async (address_id) => {
        return this.get(`${URLS.CUSTOMER.SHIPPING_SOCKET}${this.context.storeId}/${address_id}/`);
    };
    // Address
    getAddresses = async () => {
        return this.get(URLS.CUSTOMER.ADDRESS);
    };

    getAddress = async (id) => {
        return this.get(`${URLS.CUSTOMER.ADDRESS}${id}/`);
    };

    deleteAddress = async (id) => {
        return this.delete(`${URLS.CUSTOMER.ADDRESS}${id}/`);
    };

    createAddress = async (content) => {
        return this.post(URLS.CUSTOMER.ADDRESS, content);
    };

    partialUpdateAddress = async (id, content) => {
        return this.patch(`${URLS.CUSTOMER.ADDRESS}${id}/`, content);
    };

    updateAddress = async (id, content) => {
        return this.put(`${URLS.CUSTOMER.ADDRESS}${id}/`, content);
    };

    getShippingAddresses = async (address_id) => {
        return this.get(`${URLS.CUSTOMER.SHIPPING.ADDRESS}${this.context.storeId}/${address_id}/`);
    };

    getShippingAddress = async (address_id, id) => {
        return this.get(`${URLS.CUSTOMER.SHIPPING.ADDRESS}${this.context.storeId}/${address_id}/${id}/`);
    };

    //Basket
    getBasket = async (uuid) => {
        return this.get(`${URLS.CUSTOMER.BASKET}${this.context.storeId}/${uuid}/?tax=true`);
    };
    updateBasket = async (content, uuid) => {
        return this.put(`${URLS.CUSTOMER.BASKET}${this.context.storeId}/${uuid}/?tax=true`, content);
    };

    partialUpdateBasket = async (content, uuid) => {
        return this.patch(`${URLS.CUSTOMER.BASKET}${this.context.storeId}/${uuid}/?tax=true`, content);
    };

    //Category
    getCategories = async (params) => {
        const newParams = { ...params };
        if (newParams.all) newParams.limit = 'all';
        delete newParams.all;
        return this.get(`${URLS.CUSTOMER.CATEGORY}${this.context.storeId}/`, newParams, { cacheOptions: { ttl: 0 } });
    };

    getCategory = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.CATEGORY}${this.context.storeId}/${id}/`, params);
    };

    //Password
    forgetPassword = async (content) => {
        await this.post(URLS.CUSTOMER.FORGET_PASSWORD, content);
    };

    changePassword = async (content) => {
        await this.put(URLS.CUSTOMER.CHANGE_PASSWORD, content);
    };

    changePasswordWithoutOtp = async (content) => {
        await this.patch(URLS.CUSTOMER.CHANGE_PASSWORD_WITHOUT_OTP, content);
    };

    //OTP
    otpSend = async (content) => {
        await this.post(URLS.CUSTOMER.OTP_SEND, content);
    };

    otpSendSignup = async (content) => {
        const { cookies, res } = this.context;
        if (content.set_cookie === false) {
            delete content.set_cookie;
            return this.post(`${URLS.CUSTOMER.OTP_SEND}${this.context.storeId}/signup/`, content);
        } else {
            if (!cookies.access && !cookies.refresh) {
                delete content.set_cookie;
                const response = await this.post(`${URLS.CUSTOMER.OTP_SEND}${this.context.storeId}/signup/`, content);

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
        }
    };

    otpSendV2 = async (content) => {
        return this.post(`${URLS.CUSTOMER.OTP_SEND_V2}${this.context.storeId}/`, content);
    };

    //Token
    getChangePasswordAuth = async (content) => {
        return this.post(URLS.CUSTOMER.OTP_TOKEN, content);
    };

    //Collection
    getCollections = async () => {
        return this.get(`${URLS.CUSTOMER.COLLECTION}${this.context.storeId}/`);
    };

    getCollectionsWithProducts = async () => {
        return this.get(`${URLS.CUSTOMER.COLLECTION_WITH_PRODUCTS}${this.context.storeId}/`);
    };

    getCollectionsWithProductsV2 = async () => {
        return this.get(`${URLS.CUSTOMER.COLLECTION_WITH_PRODUCTS_V2}${this.context.storeId}/`);
    };

    getCollection = async (id) => {
        return this.get(`${URLS.CUSTOMER.COLLECTION}${this.context.storeId}/${id}/`);
    };

    //Tag
    getTags = async () => {
        return this.get(`${URLS.CUSTOMER.TAG}${this.context.storeId}/`);
    };

    getTag = async (id) => {
        return this.get(`${URLS.CUSTOMER.TAG}${this.context.storeId}/${id}/`);
    };

    //Favorite
    // getFavorites and getFavorite in module-develop requests to version 2
    getFavorites = async (params) => {
        return this.get(`${URLS.CUSTOMER.FAVORITE.FAVORITES}${this.context.storeId}/`, params);
    };
    getFavoritesV2 = async (params) => {
        return this.get(`${URLS.CUSTOMER.FAVORITE.FAVORITES_V2}${this.context.storeId}/`, params);
    };

    getFavorite = async (id) => {
        return this.get(`${URLS.CUSTOMER.FAVORITE.FAVORITES}${this.context.storeId}/${id}/`);
    };

    getFavoriteV2 = async (id) => {
        return this.get(`${URLS.CUSTOMER.FAVORITE.FAVORITES_V2}${this.context.storeId}/${id}/`);
    };

    isFavorite = async (id) => {
        return this.get(`${URLS.CUSTOMER.FAVORITE.FAVORITE}${this.context.storeId}/is_favorite/${id}/`);
    };

    addFavorite = async (id) => {
        return this.put(`${URLS.CUSTOMER.FAVORITE.FAVORITE}${this.context.storeId}/add/${id}/`);
    };

    addFavoriteList = async (content) => {
        return this.put(`${URLS.CUSTOMER.FAVORITE.FAVORITE}${this.context.storeId}/add/list/`, content);
    };

    removeFavorite = async (id) => {
        return this.delete(`${URLS.CUSTOMER.FAVORITE.FAVORITE}${this.context.storeId}/remove/${id}/`);
    };

    //Order
    getOrders = async (params) => {
        return this.get(`${URLS.CUSTOMER.ORDER.ORDER}${this.context.storeId}/`, params);
    };

    getOrder = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.ORDER.ORDER}${this.context.storeId}/${id}/`, params);
    };

    getOrdersV3 = async (params) => {
        return this.get(`${URLS.CUSTOMER.ORDER.ORDER_V3}${this.context.storeId}/`, params);
    };

    getOrderV3 = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.ORDER.ORDER_V3}${this.context.storeId}/${id}/`, params);
    };

    getReturnedOrder = async (id) => {
        return this.get(`${URLS.CUSTOMER.ORDER.RETURN}${this.context.storeId}/${id}/`);
    };

    getOrderAdd = async () => {
        return this.get(`${URLS.CUSTOMER.ORDER.ADD}${this.context.storeId}/`);
    };

    updateOrderAdd = async (content) => {
        return this.put(`${URLS.CUSTOMER.ORDER.ADD}${this.context.storeId}/`, content);
    };

    cancelOrder = async (id) => {
        return this.delete(`${URLS.CUSTOMER.ORDER.ORDER}${this.context.storeId}/${id}/`);
    };

    cancelOrderV3 = async (id) => {
        return this.delete(`${URLS.CUSTOMER.ORDER.ORDER_V3}${this.context.storeId}/${id}/`);
    };

    createOrder = async (content) => {
        return this.post(`${URLS.CUSTOMER.ORDER.CREATE}${this.context.storeId}/`, content);
    };

    getReceiveStatus = async (id) => {
        return this.get(`${URLS.CUSTOMER.ORDER.RECEIVE_STATUS}${this.context.storeId}/${id}/`);
    };

    updateReceiveStatus = async (id, content) => {
        return this.put(`${URLS.CUSTOMER.ORDER.RECEIVE_STATUS}${this.context.storeId}/${id}/`, content);
    };

    //HotOffer
    getHotOffers = async (params) => {
        return this.get(`${URLS.CUSTOMER.HOT_OFFER}${this.context.storeId}/`, params); // Todo: Ordering enum type
    };
    getHotOffer = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.HOT_OFFER}${this.context.storeId}/${id}/`, params);
    };

    //Appearance
    getAppearance = async () => {
        return this.get(`${URLS.CUSTOMER.APPEARANCE}${this.context.storeId}/`);
    };

    //Profile
    getProfile = async () => {
        return this.get(URLS.CUSTOMER.PROFILE);
    };
    createProfile = async (content) => {
        return this.post(URLS.CUSTOMER.PROFILE, content);
    };
    updateProfile = async (content) => {
        return this.put(URLS.CUSTOMER.PROFILE, content);
    };

    //Report available
    reportAvailable = async (content) => {
        return this.post(URLS.CUSTOMER.REPORT_AVAILABLE, content);
    };

    //Product
    getProducts = async (params) => {
        return this.get(`${URLS.CUSTOMER.PRODUCT}${this.context.storeId}/`, params);
    };
    getProductsOrHotoffers = async (params) => {
        if (params.is_hot_offer) {
            return this.get(`${URLS.CUSTOMER.HOT_OFFER}${this.context.storeId}/`, params);
        } else {
            return this.get(`${URLS.CUSTOMER.PRODUCT}${this.context.storeId}/`, params);
        }
    };
    getProduct = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.PRODUCT}${this.context.storeId}/${id}/`, params);
    };
    getBreadcrumb = async (params) => {
        if (params.type === 'product')
            return this.get(`${URLS.CUSTOMER.PRODUCT}${this.context.storeId}/${params.id}/category/parent-data/`);
        else return this.get(`${URLS.CUSTOMER.CATEGORY}${this.context.storeId}/${params.id}/parent-data/`);
    };
    productFiltering = async (params) => {
        return this.get(`${URLS.CUSTOMER.PRODUCT_FILTERING}${this.context.storeId}/`, params);
    };

    //User Notify
    getUserNotify = async (id, params) => {
        return this.get(`${URLS.CUSTOMER.USER_NOTIFY}${this.context.storeId}/${id}/?notification_type=${params}`);
    };
    createUserNotify = async (content) => {
        return this.post(`${URLS.CUSTOMER.USER_NOTIFY}${this.context.storeId}/`, content);
    };
    deleteUserNotify = async (product_id) => {
        return this.delete(`${URLS.CUSTOMER.USER_NOTIFY}${this.context.storeId}/${product_id}/`);
    };

    getLoyaltyLogs = async (params) => {
        return this.get(`${URLS.CUSTOMER.LOYALTY_LOGS}${this.context.storeId}/`, params);
    };

    //Store
    getStoreInfo = async () => {
        return this.get(`${URLS.CUSTOMER.STORE}${this.context.storeId}/`, undefined, { cacheOptions: { ttl: 0 } });
    };

    //Suggestion
    getSuggestionProducts = async (product_id, params) => {
        return this.get(`${URLS.CUSTOMER.SUGGESTION_PRODUCT}${this.context.storeId}/${product_id}/`, params);
    };

    //Feedback
    getProductFeedback = async (product_id, params) => {
        return this.get(`${URLS.CUSTOMER.FEEDBACK.PRODUCT}${this.context.storeId}/${product_id}/`, params);
    };

    getNotificationSetting = async () => {
        return this.get(`${URLS.CUSTOMER.NOTIFICATION_SETTING}${this.context.storeId}/`);
    };

    getOnlineStoreNotification = async () => {
        const uniqueActionIdResponse = [];
        let response = await this.get(`${URLS.CUSTOMER.ONLINE_STORE_NOTIFICATION}${this.context.storeId}/`);
        response = response.reverse();
        for (const r of response) {
            if (
                uniqueActionIdResponse.map((i) => i.action_id).indexOf(r.action_id) === -1 &&
                typeof r.button === 'string'
            ) {
                uniqueActionIdResponse.push(r);
            }
        }
        return uniqueActionIdResponse;
    };

    updateNotificationSetting = async (content) => {
        return this.put(`${URLS.CUSTOMER.NOTIFICATION_SETTING}${this.context.storeId}/`, content);
    };

    getNotificationToken = async () => {
        return this.get(`${URLS.CUSTOMER.NOTIFICATION_TOKEN}${this.context.storeId}/`);
    };

    //Pocket
    getPocket = async () => {
        return this.get(`${URLS.CUSTOMER.POCKET}${this.context.storeId}/`);
    };

    //Loyalty
    getLoyaltyCredit = async (id) => {
        return this.get(`${URLS.CUSTOMER.LOYALTY_CREDIT}${this.context.storeId}/${id}/`);
    };

    getLoyaltyCreditV2 = async () => {
        return this.get(`${URLS.CUSTOMER.LOYALTY_CREDIT_V2}${this.context.storeId}/`);
    };

    createLoyaltyGift = async (content) => {
        return this.post(`${URLS.CUSTOMER.LOYALTY_GIFT}${this.context.storeId}/`, content);
    };

    //Variants
    getVariantsStock = async (ids) => {
        return this.get(`${URLS.CUSTOMER.VARIANTS.STOCK}${this.context.storeId}/${ids}/`);
    };

    createStoreOpeningNotifier = async (content) => {
        await this.post(`${URLS.CUSTOMER.OPENING_NOTIFIER}${this.context.storeId}/`, content);
    };

    returnImage = async (fileUpload) => {
        const file = await fileUpload;
        return rawBody(file.createReadStream()).then((buffer) => {
            const form = new FormData();
            form.append('store_id', this.context.storeId);
            form.append('image', buffer, {
                filename: file.filename,
                contentType: file.mimetype,
                knownLength: buffer.length,
            });
            return this.post(`${URLS.CUSTOMER.RETURN_IMAGE}${this.context.storeId}/`, form);
        });
    };

    getGateway = async (id, content) => {
        return this.post(`${URLS.CUSTOMER.ORDER.GATEWAY}${this.context.storeId}/${id}/`, content);
    };

    getReturnOrders = async (params) => {
        return this.get(`${URLS.CUSTOMER.ORDER.RETURN}${this.context.storeId}/`, params);
    };

    returnOrder = async (content) => {
        await this.post(`${URLS.CUSTOMER.ORDER.RETURN}${this.context.storeId}/`, content);
    };
    getPaymentMethods = async () => {
        return this.get(`${URLS.CUSTOMER.PAYMENT}${this.context.storeId}/`);
    };
    paymentCard = async (orderId, fileUpload) => {
        const file = await fileUpload;
        return rawBody(file.createReadStream()).then((buffer) => {
            const form = new FormData();
            form.append('description', '');
            form.append('card_number', '');
            form.append('image', buffer, {
                filename: file.filename,
                contentType: file.mimetype,
                knownLength: buffer.length,
            });
            return this.post(`${URLS.CUSTOMER.CARD_PAYMENT}${this.context.storeId}/${orderId}/`, form);
        });
    };
    getTransactionTypes = async () => {
        return this.get(`${URLS.CUSTOMER.TRANSACTION_TYPE}${this.context.storeId}/`);
    };
    getThemeCustomization = async (themeName) => {
        return this.get(`${URLS.CUSTOMER.CUSTOMIZATION}${this.context.storeId}/custom/${themeName}/`);
    };

    updateThemeCustomization = async (themeName, data) => {
        return this.patch(`${URLS.CUSTOMER.CUSTOMIZATION}${this.context.storeId}/custom/${themeName}/`, { data });
    };

    createThemeCustomization = async (themeName, data) => {
        return this.post(`${URLS.CUSTOMER.CUSTOMIZATION}${this.context.storeId}/custom/`, { data, name: themeName });
    };
    getUserType = async () => {
        return this.get(`${URLS.CUSTOMER.USER_TYPE}${this.context.storeId}/type/`);
    };
    getAdminAccessToken = async ({ refresh }) => {
        const { res } = this.context;
        const response = await getRefreshToken({ refresh: refresh });
        if (response?.data) {
            res.cookie('access', response.data.access, {
                httpOnly: true,
                sameSite: 'lax',
                secure: !config.isEnvDevelopment,
                domain: !config.isEnvDevelopment ? '.digify.shop' : '',
                maxAge: 10800000,
            });
            return response.data;
        }
    };

    // Blog
    getBlogArticles = async (params) => {
        return this.get(`${URLS.CUSTOMER.BLOG.BLOGS}${this.context.storeId}/${URLS.CUSTOMER.BLOG.ARTICLE}`, params);
    };
    getBlogArticle = async (id) => {
        return this.get(`${URLS.CUSTOMER.BLOG.BLOGS}${this.context.storeId}/${URLS.CUSTOMER.BLOG.ARTICLE}${id}/`);
    };
    getBlogHighlights = async (params) => {
        return this.get(`${URLS.CUSTOMER.BLOG.BLOGS}${this.context.storeId}/${URLS.CUSTOMER.BLOG.HIGHLIGHT}`, params);
    };
    likeBlogArticle = async (id) => {
        return this.post(
            `${URLS.CUSTOMER.BLOG.BLOGS}${this.context.storeId}/${URLS.CUSTOMER.BLOG.ARTICLE}${id}/${URLS.CUSTOMER.BLOG.LIKE}`,
        );
    };
}

export default CustomerAPI;
