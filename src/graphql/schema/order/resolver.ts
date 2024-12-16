const resolver = {
    OrderStatusEnum: {
        STATUS_UNPAID: 1,
        STATUS_WAITING_FOR_APPROVAL: 14,
        STATUS_WAITING_FOR_PAYMENT: 15,
        STATUS_WAITING_FOR_PAYMENT_APPROVAL: 16,
        STATUS_PAID: 2,
        STATUS_CANCELED_OVER_TIME: 10,
        STATUS_CANCELED_OVER_TIME_SETTLED: 13,
        STATUS_CANCELED_BY_MERCHANT: 11,
        STATUS_CANCELED_BY_MERCHANT_SETTLED: 12,
        STATUS_IN_PREPARING: 3,
        STATUS_SENT: 4,
        STATUS_RECEIVED: 5,
        STATUS_UNRECEIVED: 17,
        STATUS_CANCELED: 6,
        STATUS_EXPIRED: 8,
        STATUS_PRE_ORDER_NOTIFIED: 9,
    },
    Query: {
        order: () => ({
            getManagers: async ({ params }, { dataSources }) => {
                return dataSources.orderAPI.getManagers(params);
            },
            getManager: async ({ id }, { dataSources }) => {
                return dataSources.orderAPI.getManager(id);
            },

            getManagersFilterPrimaries: async (_, { dataSources }) => {
                return dataSources.orderAPI.getManagersFilterPrimaries();
            },
            getManagersStatusCount: async (_, { dataSources }) => {
                let response = await dataSources.orderAPI.getManagersStatusCount();
                response = {
                    ...response,
                    all: response.status_count.map((e) => e.total).reduce((partialSum, a) => partialSum + a, 0),
                };
                return response;
            },

            getOrderStatus: async ({ id }, { dataSources }) => {
                return dataSources.orderAPI.getOrderStatus(id);
            },

            getPostCartoonsInsurances: async (_, { dataSources }) => {
                return dataSources.orderAPI.getPostCartoonsInsurances();
            },
            getPostProvincesCities: async ({ params }, { dataSources }) => {
                return dataSources.orderAPI.getPostProvincesCities(params);
            },

            getPostexInfo: async (_, { dataSources }) => {
                return dataSources.orderAPI.getPostexInfo();
            },

            getOrderSend: async ({ id }, { dataSources }) => {
                return dataSources.orderAPI.getOrderSend(id);
            },
            getPostexPassword: async (_, { dataSources }) => {
                return dataSources.orderAPI.getPostexPassword();
            },
            getOrdersBrief: async ({ params }, { dataSources }) => {
                return dataSources.orderAPI.getOrdersBrief(params);
            },
        }),
    },
    Mutation: {
        order: () => ({
            partialUpdateManager: async ({ id, content }, { dataSources }) => {
                await dataSources.orderAPI.partialUpdateManager(id, content);
            },
            updateManager: async ({ id, content }, { dataSources }) => {
                await dataSources.orderAPI.updateManager(id, content);
            },
            updateManagerReceiveStatus: async ({ id, content }, { dataSources }) => {
                await dataSources.orderAPI.updateManagerReceiveStatus(id, content);
            },
            updateOrderStatus: async ({ id, content }, { dataSources }) => {
                await dataSources.orderAPI.updateOrderStatus(id, content);
            },
            partialUpdateOrderStatus: async ({ id, content }, { dataSources }) => {
                await dataSources.orderAPI.partialUpdateOrderStatus(id, content);
            },
            partialPostexInfo: async ({ content }, { dataSources }) => {
                await dataSources.orderAPI.partialUpdatePostexInfo(content);
            },
            updateOrderSend: async ({ id, content }, { dataSources }) => {
                return dataSources.orderAPI.updateOrderSend(id, content);
            },
            cancelShipping: async ({ id }, { dataSources }) => {
                await dataSources.orderAPI.cancelShipping(id);
            },
            chargeAloPeykWallet: async ({ content }, { dataSources }) => {
                return dataSources.orderAPI.chargeAloPeykWallet(content);
            },
        }),
    },
};

export default resolver;
