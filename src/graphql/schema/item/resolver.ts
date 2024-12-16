const resolver = {
    Query: {
        item: () => ({
            getProducts: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getProducts(params);
            },
            getProduct: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getProduct(id);
            },
            getVariant: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getVariant(id);
            },

            getCategories: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getCategories(params);
            },
            getCategory: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getCategory(id);
            },

            getOptions: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getOptions(params);
            },
            getOption: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getOption(id);
            },

            getOptionValues: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getOptionValues(params);
            },
            getOptionValue: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getOptionValue(id);
            },
            getItemsBrief: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getItemsBrief(params);
            },
            getProductsFilterPrimsMerchant: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getProductsFilterPrimsMerchant();
            },
            getVouchers: async ({ params }, { dataSources }) => {
                return dataSources.itemAPI.getVouchers(params);
            },
            getVoucher: async ({ id }, { dataSources }) => {
                return dataSources.itemAPI.getVoucher(id);
            },
        }),
    },
    Mutation: {
        item: () => ({
            createProduct: async ({ content }, { dataSources }) => {
                return dataSources.itemAPI.createProduct(content);
            },
            deleteProduct: async ({ id }, { dataSources }) => {
                await dataSources.itemAPI.deleteProduct(id);
            },
            updateProduct: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.updateProduct(id, content);
            },
            partialUpdateProduct: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.partialUpdateProduct(id, content);
            },
            partialUpdateVariant: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.partialUpdateVariant(id, content);
            },

            deleteCategory: async ({ id }, { dataSources }) => {
                await dataSources.itemAPI.deleteCategory(id);
            },
            createCategory: async ({ content }, { dataSources }) => {
                return dataSources.itemAPI.createCategory(content);
            },
            updateCategory: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.updateCategory(id, content);
            },
            partialUpdateCategory: async ({ id, content }, { dataSources }) => {
                return dataSources.itemAPI.partialUpdateCategory(id, content);
            },

            deleteOptionValue: async ({ id }, { dataSources }) => {
                await dataSources.itemAPI.deleteOptionValue(id);
            },
            createOptionValue: async ({ content }, { dataSources }) => {
                await dataSources.itemAPI.createOptionValue(content);
            },
            updateOptionValue: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.updateOptionValue(id, content);
            },
            partialUpdateOptionValue: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.partialUpdateOptionValue(id, content);
            },

            deleteOption: async ({ id }, { dataSources }) => {
                await dataSources.itemAPI.deleteOption(id);
            },
            createOption: async ({ content }, { dataSources }) => {
                await dataSources.itemAPI.createOption(content);
            },
            updateOption: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.updateOptionValue(id, content);
            },
            uploadImage: async ({ file }, { dataSources }) => {
                return dataSources.itemAPI.uploadImage(file);
            },
            createVoucher: async ({ content }, { dataSources }) => {
                await dataSources.itemAPI.createVoucher(content);
            },
            deleteVoucher: async ({ id }, { dataSources }) => {
                await dataSources.itemAPI.deleteVoucher(id);
            },
            partialUpdateVoucher: async ({ id, content }, { dataSources }) => {
                await dataSources.itemAPI.partialUpdateVoucher(id, content);
            },
        }),
    },
};

export default resolver;
