const resolver = {
    Query: {
        payment: () => ({
            getPaymentMethods: async (_, { dataSources }) => {
                return dataSources.paymentMethodsAPI.getPaymentMethods();
            },
            getPaymentMethod: async ({ id }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.getPaymentMethod(id);
            },
            getZarrinPalStatus: async (_, { dataSources }) => {
                return dataSources.paymentMethodsAPI.getZarrinPalStatus();
            },
        }),
    },
    Mutation: {
        payment: () => ({
            createNewPaymentMethod: async ({ content }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.createNewPaymentMethod(content);
            },
            editPaymentMethod: async ({ content, id }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.editPaymentMethod(content, id);
            },
            editPaymentMethodPut: async ({ content, id }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.editPaymentMethodPut(content, id);
            },
            editCardToCard: async ({ content, id }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.editCardToCard(content, id);
            },
            deletePaymentMethod: async ({ id }, { dataSources }) => {
                await dataSources.paymentMethodsAPI.deletePaymentMethod(id);
            },
            createBehPardakht: async ({ content }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.createBehPardakht(content);
            },
            createZarrinPal: async ({ content }, { dataSources }) => {
                await dataSources.paymentMethodsAPI.createZarrinPal(content);
            },
            verifyZarrinPalOTP: async ({ content }, { dataSources }) => {
                await dataSources.paymentMethodsAPI.verifyZarrinPalOTP(content);
            },
            chooseExTerminalZarrinpal: async ({ content }, { dataSources }) => {
                return dataSources.paymentMethodsAPI.chooseExTerminalZarrinpal(content);
            },
            submitZarrinPalCreation: async (_, { dataSources }) => {
                await dataSources.paymentMethodsAPI.submitZarrinPalCreation();
            },
            uploadZarrinPalDocument: async ({ files }, { dataSources }) => {
                await dataSources.paymentMethodsAPI.uploadZarrinPalDocument(files);
            },
        }),
    },
};

export default resolver;
