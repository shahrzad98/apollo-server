import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';
import rawBody from 'raw-body';
import FormData from 'form-data';
class ItemAPI extends RESTDataSource {
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

    //Product
    getProducts = async (params) => {
        return this.get(`${URLS.ITEM.PRODUCT}${this.context.storeId}/`, params);
    };

    getProduct = async (id) => {
        return this.get(`${URLS.ITEM.PRODUCT}${this.context.storeId}/${id}/`);
    };
    getVariant = async (id) => {
        return this.get(`${URLS.ITEM.VARIANT}${this.context.storeId}/${id}/`);
    };

    createProduct = async (content) => {
        return this.post(`${URLS.ITEM.PRODUCT}${this.context.storeId}/`, content);
    };

    deleteProduct = async (id) => {
        return this.delete(`${URLS.ITEM.PRODUCT}${this.context.storeId}/${id}/`);
    };

    updateProduct = async (id, content) => {
        return this.put(`${URLS.ITEM.PRODUCT}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateProduct = async (id, content) => {
        return this.patch(`${URLS.ITEM.PRODUCT}${this.context.storeId}/${id}/`, content);
    };
    partialUpdateVariant = async (id, content) => {
        return this.patch(`${URLS.ITEM.VARIANT}${this.context.storeId}/${id}/`, content);
    };

    //Category
    getCategories = async (params) => {
        return this.get(`${URLS.ITEM.CATEGORY}${this.context.storeId}/`, params);
    };

    getCategory = async (id) => {
        return this.get(`${URLS.ITEM.CATEGORY}${this.context.storeId}/${id}/`);
    };

    createCategory = async (content) => {
        return this.post(`${URLS.ITEM.CATEGORY}${this.context.storeId}/`, content);
    };

    updateCategory = async (id, content) => {
        return this.put(`${URLS.ITEM.CATEGORY}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateCategory = async (id, content) => {
        return this.patch(`${URLS.ITEM.CATEGORY}${this.context.storeId}/${id}/`, content);
    };

    deleteCategory = async (id) => {
        return this.delete(`${URLS.ITEM.CATEGORY}${this.context.storeId}/${id}/`);
    };

    //Option value
    getOptionValues = async (params) => {
        return this.get(URLS.ITEM.OPTION_VALUE, params);
    };

    getOptionValue = async (id) => {
        return this.get(`${URLS.ITEM.OPTION_VALUE}${id}/`);
    };

    createOptionValue = async (content) => {
        return this.post(`${URLS.ITEM.OPTION_VALUE}${this.context.storeId}/`, content);
    };

    updateOptionValue = async (id, content) => {
        return this.put(`${URLS.ITEM.OPTION_VALUE}${this.context.storeId}/${id}/`, content);
    };

    partialUpdateOptionValue = async (id, content) => {
        return this.patch(`${URLS.ITEM.OPTION_VALUE}${this.context.storeId}/${id}/`, content);
    };

    deleteOptionValue = async (id) => {
        return this.delete(`${URLS.ITEM.OPTION_VALUE}${this.context.storeId}/${id}/`);
    };
    //voucher
    getVouchers = async (params) => {
        return this.get(`${URLS.ITEM.VOUCHER}${this.context.storeId}/`, params);
    };
    getVoucher = async (id) => {
        return this.get(`${URLS.ITEM.VOUCHER}${this.context.storeId}/${id}`);
    };
    createVoucher = async (content) => {
        return this.post(`${URLS.ITEM.VOUCHER}${this.context.storeId}/`, content);
    };
    partialUpdateVoucher = async (id, content) => {
        return this.patch(`${URLS.ITEM.VOUCHER}${this.context.storeId}/${id}/`, content);
    };
    deleteVoucher = async (id) => {
        return this.delete(`${URLS.ITEM.VOUCHER}${this.context.storeId}/${id}/`);
    };
    //Option
    getOptions = async (params) => {
        return this.get(`${URLS.ITEM.OPTION}${this.context.storeId}/`, params);
    };

    getOption = async (id) => {
        return this.get(`${URLS.ITEM.OPTION}${this.context.storeId}/${id}/`);
    };

    createOption = async (content) => {
        return this.post(`${URLS.ITEM.OPTION}${this.context.storeId}/`, content);
    };

    updateOption = async (id, content) => {
        return this.put(`${URLS.ITEM.OPTION}${this.context.storeId}/${id}/`, content);
    };

    deleteOption = async (id) => {
        return this.delete(`${URLS.ITEM.OPTION}${this.context.storeId}/${id}/`);
    };
    getProductsFilterPrimsMerchant = async () => {
        return this.get(`${URLS.ITEM.FILTER_PRIMARIES}${this.context.storeId}/get_filter_primaries/`);
    };
    getItemsBrief = async (params) => {
        return this.get(`${URLS.ITEM.BRIEF}${this.context.storeId}/`, params);
    };
    uploadImage = async (fileUpload) => {
        const file = await fileUpload;
        return rawBody(file.createReadStream()).then((buffer) => {
            const form = new FormData();
            form.append('store_id', this.context.storeId);
            form.append('image', buffer, {
                filename: file.filename,
                contentType: file.mimetype,
                knownLength: buffer.length,
            });
            return this.post(`${URLS.ITEM.IMAGE_UPLOAD}/`, form);
        });
    };
}

export default ItemAPI;
