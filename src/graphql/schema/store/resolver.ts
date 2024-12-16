const resolver = {
    Query: {
        store: () => ({
            getBrands: async ({ params }, { dataSources }) => {
                return dataSources.storeAPI.getBrands(params);
            },
            getHomeData: async (_, { dataSources }) => {
                return dataSources.storeAPI.getHomeData();
            },
            getStores: async ({ params }, { dataSources }) => {
                return dataSources.storeAPI.getStores(params);
            },
            getStoreDetail: async ({ storeId }, { dataSources }) => {
                return dataSources.storeAPI.getStoreDetail(storeId);
            },
            getStoreServiceDetail: async ({ storeId }, { dataSources }) => {
                return dataSources.storeAPI.getStoreServiceDetail(storeId);
            },
            getSmsData: async ({ _ }, { dataSources }) => {
                return dataSources.storeAPI.getSmsData();
            },
            getWalletData: async ({ _ }, { dataSources }) => {
                return dataSources.storeAPI.getWalletData();
            },
            getStorePassword: async ({ phoneNumber }, { dataSources }) => {
                await dataSources.storeAPI.getStorePassword(phoneNumber);
            },
            exportStoresExcel: async ({ params }, { dataSources }) => {
                await dataSources.storeAPI.exportStoresExcel(params);
            },
            getStatistics: async ({ params }, { dataSources }) => {
                return dataSources.storeAPI.getStatistics(params);
            },
        }),
    },
    Mutation: {
        store: () => ({
            updateStoreServiceDetail: async ({ storeId, content }, { dataSources }) => {
                await dataSources.storeAPI.updateStoreServiceDetail(storeId, content);
            },
            editStoreData: async ({ content }, { dataSources }) => {
                await dataSources.storeAPI.editStoreData(content);
            },
            patchSmsData: async ({ content }, { dataSources }) => {
                return dataSources.storeAPI.patchSmsData(content);
            },
            chargeWallet: async ({ content }, { dataSources }) => {
                return dataSources.storeAPI.chargeWallet(content);
            },
            updateCustomDomain: async ({ content }, { dataSources }) => {
                await dataSources.storeAPI.updateCustomDomain(content);
            },
            adminChargeWallet: async ({ content }, { dataSources }) => {
                await dataSources.storeAPI.adminChargeWallet(content);
            },
            importDigikalaProducts: async ({ content }, { dataSources }) => {
                await dataSources.storeAPI.importDigikalaProducts(content);
            },
            activateTorob: async ({ content }, { dataSources }) => {
                await dataSources.storeAPI.activateTorob(content);
            },
        }),
    },
};

export default resolver;
