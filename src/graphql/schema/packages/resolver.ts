const resolver = {
    Query: {
        packages: () => ({
            getPackages: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getPackages(params);
            },
            getPackage: async ({ id }, { dataSources }) => {
                return dataSources.packagesAPI.getPackage(id);
            },
            getVouchers: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getVouchers(params);
            },
            getVoucher: async ({ id }, { dataSources }) => {
                return dataSources.packagesAPI.getVoucher(id);
            },
            getSafirs: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getSafirs(params);
            },
            getPackagesBySafirs: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getPackagesBySafirs(params);
            },
            getPackagesByVoucher: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getPackagesByVoucher(params);
            },
            getVouchersOfSafirs: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getVouchersOfSafirs(params);
            },
            getCurrentPackage: async ({ _ }, { dataSources }) => {
                return dataSources.packagesAPI.getCurrentPackage();
            },
            getFinancialData: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getFinancialData(params);
            },
            getPurchasePackages: async ({ params }, { dataSources }) => {
                console.log(await dataSources.packagesAPI.getPurchasePackages(params));
                return dataSources.packagesAPI.getPurchasePackages(params);
            },
            getReservedPackages: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.getReservedPackages(params);
            },
        }),
    },
    Mutation: {
        packages: () => ({
            createPackage: async ({ content }, { dataSources }) => {
                await dataSources.packagesAPI.createPackage(content);
            },
            deletePackage: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.deletePackage(id, content);
            },
            partialUpdatePackage: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.partialUpdatePackage(id, content);
            },
            updatePackage: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.updatePackage(id, content);
            },
            createVoucher: async ({ content }, { dataSources }) => {
                await dataSources.packagesAPI.createVoucher(content);
            },
            deleteVoucher: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.deleteVoucher(id, content);
            },
            partialUpdateVoucher: async ({ id, content }, { dataSources }) => {
                return dataSources.packagesAPI.partialUpdateVoucher(id, content);
            },
            updateVoucher: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.updateVoucher(id, content);
            },
            createSafir: async ({ content }, { dataSources }) => {
                await dataSources.packagesAPI.createSafir(content);
            },
            deleteSafir: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.deleteSafir(id, content);
            },
            partialUpdateSafir: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.partialUpdateSafir(id, content);
            },
            updatSafirr: async ({ id, content }, { dataSources }) => {
                await dataSources.packagesAPI.updateSafir(id, content);
            },
            checkPackageVoucher: async ({ params }, { dataSources }) => {
                return dataSources.packagesAPI.checkPackageVoucher(params);
            },
            buyPackage: async ({ content }, { dataSources }) => {
                return dataSources.packagesAPI.buyPackage(content);
            },
            chargeSms: async ({ content }, { dataSources }) => {
                return dataSources.packagesAPI.chargeSms(content);
            },
        }),
    },
};

export default resolver;
