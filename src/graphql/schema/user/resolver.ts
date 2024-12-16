const resolver = {
    Query: {
        user: () => ({
            userCheck: async ({ phoneNumber }, { dataSources }) => {
                return dataSources.userAPI.userCheck(phoneNumber);
            },
            getUserInfo: async (_, { dataSources }) => {
                return dataSources.userAPI.getUserInfo();
            },
            getUserRead: async (_, { dataSources }) => {
                return dataSources.userAPI.getUserRead();
            },
        }),
    },
    Mutation: {
        user: () => ({
            getToken: async ({ content }, { dataSources }) => {
                return dataSources.userAPI.getToken(content);
            },
            getCookie: async ({ content }, { dataSources }) => {
                return dataSources.userAPI.getCookie(content);
            },
            clearCookie: async (_, { dataSources }) => {
                await dataSources.userAPI.clearCookie();
            },
            getRefreshToken: async ({ content }, { dataSources }) => {
                return dataSources.userAPI.getRefreshToken(content);
            },
        }),
    },
};

export default resolver;
