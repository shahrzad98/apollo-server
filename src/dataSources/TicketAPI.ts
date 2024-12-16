import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';
import URLS from '../constant/URLS';

class TicketAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.baseApiUrl;
    }

    willSendRequest = (request: RequestOptions) => {
        request.headers.set('authorization', this.context.token);

        const acceptLanguage = this.context.acceptLanguage;
        if (acceptLanguage) request.headers.set('accept-language', acceptLanguage);

        const xForwardedFor = this.context.req.headers['x-forwarded-for'];
        const remoteAddress = this.context.req?.socket?.remoteAddress;

        if (xForwardedFor) request.headers.set('x-forwarded-for', xForwardedFor);
        if (remoteAddress) request.headers.set('remote-address', remoteAddress);

        if (this.context?.origin) request.headers.set('Origin', this.context.origin);
        if (this.context?.referer) request.headers.set('Referer', this.context.referer);
    };

    getTickets = async () => {
        return this.get(`${URLS.TICKET.TICKET}${this.context.storeId}/`);
    };

    getTicket = async (id) => {
        return this.get(`${URLS.TICKET.TICKET}${this.context.storeId}/${id}/`);
    };

    getAdminTickets = async (params) => {
        return this.get(URLS.TICKET.SUPPORT_TICKET, params);
    };
    seeTicket = async (id, content) => {
        return this.put(`${URLS.TICKET.SUPPORT_TICKET}${id}/`, content);
    };
    createTicket = async (content) => {
        return this.post(`${URLS.TICKET.TICKET}${this.context.storeId}/`, content);
    };

    deleteTicket = async (id) => {
        return this.delete(`${URLS.TICKET.TICKET}${this.context.storeId}/${id}/`);
    };

    partialUpdateTicket = async (id, content) => {
        return this.patch(`${URLS.TICKET.TICKET}${this.context.storeId}/${id}/`, content);
    };

    updateTicket = async (id, content) => {
        return this.put(`${URLS.TICKET.TICKET}${this.context.storeId}/${id}/`, content);
    };
}

export default TicketAPI;
