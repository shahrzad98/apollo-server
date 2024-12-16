const resolver = {
    AllowedStatuses: {
        SUBMITTED: 1,
        PAID: 2,
        CONFIRMED: 3,
        SENT: 4,
        RECEIVED: 5,
        CANCELED: 6,
        EXPIRED: 8,
        PRE_ORDER_NOTIFIED: 9,
    },
    AllowedStatus: {
        WAITING_FOR_PAYMENT: 'waiting_for_payment',
        PROCESSING: 'processing',
        RECEIVED: 'received',
        RETURNED: 'returned',
        CANCELED: 'canceled',
    },
    AllowedReceiveStatuses: {
        RECEIVED: 5,
        UNRECEIVED: 17,
    },
    AllowedNotificationType: {
        HOT_OFFER: 1,
        PRODUCT_AVAILABLE: 2,
    },
    ProductOrderingType: {
        MOST_SALE: '-sales_amount',
        LEAST_SALE: 'sales_amount',
        NEWEST: '-created_at',
        OLDEST: 'created_at',
        COST_MIN: 'cost_max',
        COST_MAX: '-cost_max',
        MOST_DISCOUNT: 'profit_percent',
    },
    BreadcrumbType: {
        PRODUCT: 'product',
        CATEGORY: 'category',
    },
    Query: {
        customer: () => ({
            getSitemap: async (_, { dataSources }) => {
                return dataSources.customerAPI.getSitemap();
            },
            getShippingSokect: async ({ address_id }, { dataSources }) => {
                return dataSources.customerAPI.getShippingSokect(address_id);
            },
            getAddresses: async (_, { dataSources }) => {
                return dataSources.customerAPI.getAddresses();
            },
            getAddress: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getAddress(id);
            },
            getShippingAddresses: async ({ address_id }, { dataSources }) => {
                return dataSources.customerAPI.getShippingAddresses(address_id);
            },
            getShippingAddress: async ({ address_id, id }, { dataSources }) => {
                return dataSources.customerAPI.getShippingAddress(address_id, id);
            },
            getBasket: async ({ uuid }, { dataSources }) => {
                return dataSources.customerAPI.getBasket(uuid);
            },
            getCollections: async (_, { dataSources }) => {
                return dataSources.customerAPI.getCollections();
            },
            getCollectionsWithProducts: async (_, { dataSources }) => {
                return dataSources.customerAPI.getCollectionsWithProducts();
            },
            getCollectionsWithProductsV2: async (_, { dataSources }) => {
                return dataSources.customerAPI.getCollectionsWithProductsV2();
            },
            getCollection: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getCollection(id);
            },
            getTags: async (_, { dataSources }) => {
                return dataSources.customerAPI.getTags();
            },
            getTag: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getTag(id);
            },
            getCategories: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getCategories(params);
            },
            getCategory: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getCategory(id, params);
            },
            getBreadcrumb: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getBreadcrumb(params);
            },
            getFavorites: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getFavorites(params);
            },
            getFavoritesV2: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getFavoritesV2(params);
            },
            getFavorite: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getFavorite(id);
            },
            getFavoriteV2: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getFavoriteV2(id);
            },
            isFavorite: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.isFavorite(id);
            },
            getOrders: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getOrders(params);
            },
            getOrder: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getOrder(id, params);
            },
            getOrdersV3: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getOrdersV3(params);
            },
            getOrderV3: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getOrderV3(id, params);
            },
            getReturnedOrder: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getReturnedOrder(id, params);
            },
            getOrderAdd: async (_, { dataSources }) => {
                return dataSources.customerAPI.getOrderAdd();
            },
            getReceiveStatus: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getReceiveStatus(id);
            },
            getHotOffers: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getHotOffers(params);
            },
            getHotOffer: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getHotOffer(id, params);
            },
            getAppearance: async (_, { dataSources }) => {
                return dataSources.customerAPI.getAppearance();
            },
            getProfile: async (_, { dataSources }) => {
                return dataSources.customerAPI.getProfile();
            },
            getProducts: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getProducts(params);
            },
            getProductsOrHotoffers: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getProductsOrHotoffers(params);
            },
            getProduct: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getProduct(id, params);
            },
            productFiltering: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.productFiltering(params);
            },
            reportAvailable: async ({ params }, { dataSources }) => {
                await dataSources.customerAPI.reportAvailable(params);
            },
            getUserNotify: async ({ id, params }, { dataSources }) => {
                return dataSources.customerAPI.getUserNotify(id, params);
            },
            getLoyaltyLogs: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getLoyaltyLogs(params);
            },
            getStoreInfo: async (_, { dataSources }) => {
                return dataSources.customerAPI.getStoreInfo();
            },
            getSuggestionProducts: async ({ product_id, params }, { dataSources }) => {
                return dataSources.customerAPI.getSuggestionProducts(product_id, params);
            },
            getProductFeedback: async ({ product_id, params }, { dataSources }) => {
                return dataSources.customerAPI.getProductFeedback(product_id, params);
            },
            getNotificationSetting: async (_, { dataSources }) => {
                return dataSources.customerAPI.getNotificationSetting();
            },
            getOnlineStoreNotification: async (_, { dataSources }) => {
                return dataSources.customerAPI.getOnlineStoreNotification();
            },
            getNotificationToken: async (_, { dataSources }) => {
                return dataSources.customerAPI.getNotificationToken();
            },
            getPocket: async (_, { dataSources }) => {
                return dataSources.customerAPI.getPocket();
            },
            getLoyaltyCredit: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getLoyaltyCredit(id);
            },
            getLoyaltyCreditV2: async (_, { dataSources }) => {
                return dataSources.customerAPI.getLoyaltyCreditV2();
            },
            getVariantsStock: async ({ ids }, { dataSources }) => {
                return dataSources.customerAPI.getVariantsStock(ids);
            },
            getReturnOrders: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getReturnOrders(params);
            },
            getTransactionTypes: async (_, { dataSources }) => {
                return dataSources.customerAPI.getTransactionTypes();
            },
            getPaymentMethods: async (_, { dataSources }) => {
                return dataSources.customerAPI.getPaymentMethods();
            },
            getThemeCustomization: async ({ themeName }, { dataSources }) => {
                return dataSources.customerAPI.getThemeCustomization(themeName);
            },
            getUserType: async (_, { dataSources }) => {
                return dataSources.customerAPI.getUserType();
            },
            getBlogArticles: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getBlogArticles(params);
            },
            getBlogArticle: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.getBlogArticle(id);
            },
            getBlogHighlights: async ({ params }, { dataSources }) => {
                return dataSources.customerAPI.getBlogHighlights(params);
            },
        }),
    },
    Mutation: {
        customer: () => ({
            deleteAddress: async ({ id }, { dataSources }) => {
                await dataSources.customerAPI.deleteAddress(id);
            },
            createAddress: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createAddress(content);
            },
            partialUpdateAddress: async ({ id, content }, { dataSources }) => {
                return dataSources.customerAPI.partialUpdateAddress(id, content);
            },
            updateAddress: async ({ id, content }, { dataSources }) => {
                return dataSources.customerAPI.updateAddress(id, content);
            },
            forgetPassword: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.forgetPassword(content);
            },
            changePassword: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.changePassword(content);
            },
            changePasswordWithoutOtp: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.changePasswordWithoutOtp(content);
            },
            otpSend: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.otpSend(content);
            },
            otpSendV2: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.otpSendV2(content);
            },
            otpSendSignup: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.otpSendSignup(content);
            },
            getChangePasswordAuth: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.getChangePasswordAuth(content);
            },
            cancelOrder: async ({ id }, { dataSources }) => {
                await dataSources.customerAPI.cancelOrder(id);
            },
            cancelOrderV3: async ({ id }, { dataSources }) => {
                await dataSources.customerAPI.cancelOrderV3(id);
            },
            updateOrderAdd: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.updateOrderAdd(content);
            },

            updateBasket: async ({ content, uuid }, { dataSources }) => {
                return dataSources.customerAPI.updateBasket(content, uuid);
            },
            partialUpdateBasket: async ({ content, uuid }, { dataSources }) => {
                return dataSources.customerAPI.partialUpdateBasket(content, uuid);
            },
            createOrder: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createOrder(content);
            },
            updateReceiveStatus: async ({ id, content }, { dataSources }) => {
                await dataSources.customerAPI.updateReceiveStatus(id, content);
            },
            createProfile: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createProfile(content);
            },
            updateProfile: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.updateProfile(content);
            },
            createUserNotify: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createUserNotify(content);
            },
            deleteUserNotify: async ({ product_id }, { dataSources }) => {
                return dataSources.customerAPI.deleteUserNotify(product_id);
            },
            addFavorite: async ({ id }, { dataSources }) => {
                await dataSources.customerAPI.addFavorite(id);
            },
            removeFavorite: async ({ id }, { dataSources }) => {
                await dataSources.customerAPI.removeFavorite(id);
            },
            addFavoriteList: async ({ content }, { dataSources }) => {
                await dataSources.customerAPI.addFavoriteList(content);
            },
            updateNotificationSetting: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.updateNotificationSetting(content);
            },
            createLoyaltyGift: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createLoyaltyGift(content);
            },
            createStoreOpeningNotifier: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.createStoreOpeningNotifier(content);
            },
            returnImage: async ({ file }, { dataSources }) => {
                return dataSources.customerAPI.returnImage(file);
            },
            getGateway: async ({ id, content }, { dataSources }) => {
                return dataSources.customerAPI.getGateway(id, content);
            },
            returnOrder: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.returnOrder(content);
            },
            paymentCard: async ({ orderId, image }, { dataSources }) => {
                await dataSources.customerAPI.paymentCard(orderId, image);
            },
            updateThemeCustomization: async ({ themeName, data }, { dataSources }) => {
                return dataSources.customerAPI.updateThemeCustomization(themeName, data);
            },
            createThemeCustomization: async ({ themeName, data }, { dataSources }) => {
                return dataSources.customerAPI.createThemeCustomization(themeName, data);
            },
            getAdminAccessToken: async ({ content }, { dataSources }) => {
                return dataSources.customerAPI.getAdminAccessToken(content);
            },
            likeBlogArticle: async ({ id }, { dataSources }) => {
                return dataSources.customerAPI.likeBlogArticle(id);
            },
        }),
    },
};

export default resolver;
