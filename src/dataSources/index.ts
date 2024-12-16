import UserAPI from './UserAPI';
import TicketAPI from './TicketAPI';
import CustomerAPI from './CustomerAPI';
import MerchantRegisterAPI from './MerchantRegisterAPI';
import PromotionAPI from './PromotionAPI';
import NotificationAPI from './NotificationAPI';
import PackagesAPI from './PackagesAPI';
import ItemAPI from './ItemAPI';
import OrderAPI from './OrderAPI';
import StoreAPI from './StoreAPI';
import ShippingAPI from './ShippingAPI';
import PaymentMethodsAPI from './PaymentMethodsAPI';

const dataSources = () => {
    return {
        userAPI: new UserAPI(),
        itemAPI: new ItemAPI(),
        ticketAPI: new TicketAPI(),
        customerAPI: new CustomerAPI(),
        merchantRegisterAPI: new MerchantRegisterAPI(),
        promotionAPI: new PromotionAPI(),
        notificationAPI: new NotificationAPI(),
        packagesAPI: new PackagesAPI(),
        orderAPI: new OrderAPI(),
        storeAPI: new StoreAPI(),
        shippingAPI: new ShippingAPI(),
        paymentMethodsAPI: new PaymentMethodsAPI(),
    };
};

export default dataSources;
