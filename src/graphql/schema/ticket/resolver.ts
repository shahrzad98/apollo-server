const resolver = {
    Query: {
        ticket: () => ({
            getTickets: async (_, { dataSources }) => {
                return dataSources.ticketAPI.getTickets();
            },
            getTicket: async ({ id }, { dataSources }) => {
                return dataSources.ticketAPI.getTicket(id);
            },
            getAdminTickets: async ({ params }, { dataSources }) => {
                return dataSources.ticketAPI.getAdminTickets(params);
            },
        }),
    },
    Mutation: {
        ticket: () => ({
            deleteTicket: async ({ id }, { dataSources }) => {
                return dataSources.ticketAPI.deleteTicket(id);
            },
            partialUpdateTicket: async ({ id, content }, { dataSources }) => {
                return dataSources.ticketAPI.partialUpdateTicket(id, content);
            },
            updateTicket: async ({ id, content }, { dataSources }) => {
                return dataSources.ticketAPI.updateTicket(id, content);
            },
            createTicket: async ({ content }, { dataSources }) => {
                return dataSources.ticketAPI.createTicket(content);
            },
            seeTicket: async ({ id, content }, { dataSources }) => {
                return dataSources.ticketAPI.seeTicket(id, content);
            },
        }),
    },
};

export default resolver;
