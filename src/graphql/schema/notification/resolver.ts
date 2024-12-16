const resolver = {
    Query: {
        notification: () => ({
            getToken: async (_, { dataSources }) => {
                return dataSources.notificationAPI.getToken();
            },
            getTokenPanel: async (_, { dataSources }) => {
                return dataSources.notificationAPI.getTokenPanel();
            },
        }),
    },
    Mutation: {
        notification: () => ({
            seenNotif: async (_, { dataSources }, { notifIds }) => {
                await dataSources.notificationAPI.seenNotif(notifIds);
            },
            deleteNotif: async (_, { dataSources }, { notifIds }) => {
                await dataSources.notificationAPI.deleteNotif(notifIds);
            },
            getBusinessWsToken: async (_, { dataSources }) => {
                return dataSources.notificationAPI.getBusinessWsToken();
            },
        }),
    },
};

export default resolver;
