const resolver = {
    Query: {
        shipping: () => ({
            getShippingMethods: async ({ param }, { dataSources }) => {
                return dataSources.shippingAPI.getShippingMethods(param);
            },
            getShippingMethodDetail: async ({ param }, { dataSources }) => {
                return dataSources.shippingAPI.getShippingMethodDetail(param);
            },
            getProvincesCities: async ({ param }, { dataSources }) => {
                return dataSources.shippingAPI.getProvincesCities(param);
            },
            getNeshanCity: async ({ param }, { dataSources }) => {
                return dataSources.shippingAPI.getNeshanCity(param);
            },
            sendPostexSms: async (_, { dataSources }) => {
                return dataSources.shippingAPI.sendPostexSms();
            },
            getDigiExpressActiveCities: async (_, { dataSources }) => {
                return dataSources.shippingAPI.getDigiExpressActiveCities();
            },
        }),
    },
    Mutation: {
        shipping: () => ({
            createNewShipping: async ({ content }, { dataSources }) => {
                return dataSources.shippingAPI.createNewShipping(content);
            },
            editShipping: async ({ content, id }, { dataSources }) => {
                return dataSources.shippingAPI.editShipping(content, id);
            },
            deleteShipping: async ({ content }, { dataSources }) => {
                await dataSources.shippingAPI.deleteShipping(content);
            },
        }),
    },
};

export default resolver;
