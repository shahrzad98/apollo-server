const resolver = {
    Mutation: {
        promotion: () => ({
            voucherCheck: async ({ content }, { dataSources }) => {
                return dataSources.promotionAPI.voucherCheck(content);
            },
        }),
    },
};

export default resolver;
