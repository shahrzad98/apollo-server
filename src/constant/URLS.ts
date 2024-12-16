const URLS = {
    USER: {
        TOKEN: 'user/token/',
        REFRESH_TOKEN: 'user/token/refresh/',
        CHECK: 'user/check/',
        INFO: 'user/info',
        READ: 'user/v2/read/0/',
    },
    TICKET: {
        TICKET: 'ticket/ticket/',
        SUPPORT_TICKET: 'ticket/support/',
    },
    SHIPPING: {
        SHIPPINGS: 'order/v2/shipping/',
        CITIES: 'order/post/207/get_provinces_cities/',
        GET_NESHAN_CITY: 'https://api.neshan.org/v4/reverse',
        DIGIEXPRESS_ACTIVE_CITIES: 'order/shipping/digiexpress/active-cities/',
        POSTEX_SMS: 'order/postex/',
    },
    PAYMENT_METHODS: {
        PAYMENT_METHODS: 'payment/payment-info/',
    },
    CUSTOMER: {
        ADDRESS: 'customer/address/',
        SHIPPING_SOCKET: 'customer/shipping-address-socket/',
        SITEMAP: 'customer/sitemap/',
        BASKET: 'customer/basket/',
        CATEGORY: 'customer/v2/category/',
        FORGET_PASSWORD: 'customer/change-password/',
        CHANGE_PASSWORD: 'customer/change/',
        CHANGE_PASSWORD_WITHOUT_OTP: 'customer/change/password/', // add from module-develop
        OTP_SEND: 'customer/otp-send/',
        OTP_SEND_V2: 'customer/v2/otp-send/',
        OTP_TOKEN: 'customer/otp-token/',
        COLLECTION: 'customer/collection/',
        COLLECTION_WITH_PRODUCTS: 'customer/collection/products/',
        COLLECTION_WITH_PRODUCTS_V2: 'customer/v2/collection/products/',
        TAG: 'customer/tag/',
        OPENING_NOTIFIER: 'customer/store-opening-notifier/',
        FAVORITE: {
            FAVORITE: 'customer/favorite/',
            FAVORITES: 'customer/favorites/',
            FAVORITES_V2: 'customer/v2/favorites/', // add from module-develop
        },
        ORDER: {
            ORDER: 'customer/v2/order/',
            ORDER_V3: 'customer/v3/order/', // add from module-develop
            RETURN: 'customer/v2/returns/',
            ADD: 'customer/order/add/',
            CREATE: 'customer/v3/order/create/',
            RECEIVE_STATUS: 'customer/order/receive-status/',
            GATEWAY: 'customer/order/get_gateway/',
        },
        FEEDBACK: {
            PRODUCT: 'customer/product/feedback/',
        },
        HOT_OFFER: 'customer/product/hot-offer/',
        APPEARANCE: 'customer/appearance/',
        PROFILE: 'customer/profile/',
        REPORT_AVAILABLE: 'customer/report-available/',
        PRODUCT: 'customer/product/',
        PRODUCT_FILTERING: 'customer/product-filtering/',
        SUGGESTION_PRODUCT: 'customer/v2/product/suggestion/',
        USER_NOTIFY: 'customer/user-notify/',
        LOYALTY_LOGS: 'customer/loyalty-logs/',
        LOYALTY_CREDIT: 'customer/get_loyalty_credit/',
        LOYALTY_CREDIT_V2: 'customer/v2/get_loyalty_credit/', // add from module-develop
        LOYALTY_GIFT: 'customer/loyalty-gift/',
        STORE: 'customer/v2/store/',
        NOTIFICATION_SETTING: 'customer/notification-setting/',
        NOTIFICATION_TOKEN: 'notif/online-store/token/',
        ONLINE_STORE_NOTIFICATION: 'notif/online-store/',
        SHIPPING: {
            ADDRESS: 'customer/shipping-address/',
        },
        POCKET: 'customer/pocket/',
        VARIANTS: {
            STOCK: 'customer/variants/stock/',
        },
        RETURN_IMAGE: 'customer/return-image/',
        CARD_PAYMENT: 'customer/payment/card/', // add from module-develop
        TRANSACTION_TYPE: 'customer/payment/types/', // add from module-develop
        PAYMENT: 'customer/payment/types/',
        CUSTOMIZATION: 'themes/', // add from module-develop
        USER_TYPE: 'customer/user/', // add from module-develop
        BLOG: {
            BLOGS: 'customer/blogs/', // add from module-develop
            ARTICLE: 'article/', // add from module-develop
            HIGHLIGHT: 'highlight/', // add from module-develop
            LIKE: 'like/', // add from module-develop
        },
    },
    MERCHANT_REGISTER: {
        OTP_SEND: 'user/merchant/otp/',
        VALIDATE_TOKEN: 'store/temp-token/',
        CREATE_PROFILE: 'store/v2/brand-create/',
        GET_GUILD: 'store/guild/',
        CHECK_SUB: 'store/domain/sub/check/',
        SEND_OTP_FORGET_PASSWORD: '/user/otp-user/forget-password/',
        CHECK_OTP: 'user/forget-password/token/',
        CHANGE_PASSWORD: 'user/forget-password/',
        // delete PACKAGES_SOLD_BY_SAFIRS
        // delete PACKAGES_SOLD_BY_VOUCHER
        // delete PURCHASE_PACKAGES
    },
    PROMOTION: {
        VOUCHER: {
            CHECK: 'promotion/voucher/check/',
        },
    },
    NOTIFICATION: {
        TOKEN: 'notif/online-store/token/',
        SEEN_OR_DELETE: 'notif/online-store/modify/',
        GET_TOKEN: '/notif/token/',
        BUSINESS_TOKEN: 'notif/business-token/',
    },
    PACKAGES: {
        PACKAGE: 'packages/package/',
        PURCHASED_PACKAGE: 'packages/purchase-package/',
        VOUCHER: 'packages/voucher/',
        VOUCHER_DIGIFY: 'packages/voucher/digify/',
        SAFIR: 'packages/safir/',
        GET_CURRENT_PACKAGE: '/packages/purchase-package/current_package/',
        CHECK_VOUCHER: '/packages/voucher/check',
        CHARGE_SMS: '/payment/sms-charge/',
        FINANCIAL_DATA: '/payment/v4/payment/',
    },
    ITEM: {
        PRODUCT: 'item/v2/product/',
        CATEGORY: 'item/v2/category/',
        OPTION_VALUE: 'item/option-value/',
        OPTION: 'item/option/',
        BRIEF: 'item/brief/',
        IMAGE_UPLOAD: 'item/image',
        VARIANT: 'item/variant/',
        FILTER_PRIMARIES: 'item/v2/product/',
        VOUCHER: 'promotion/v2/voucher/',
    },
    ORDER: {
        MANAGER: 'order/v3/manager/',
        STATUS: 'order/status/',
        POST: 'order/post/',
        POSTEX: 'order/postex/',
        SEND: 'order/send/',
        BRIEF: 'order/brief/',
        CHARGE_SHIPPING_WALLET: 'store/shipping-wallet/',
    },
    STORE: {
        SUPPORT: {
            BRAND: 'store/support/brand/',
        },
        HOME: 'store/details/',
        STORES: 'store/support/store/', //created_at_min va max
        STORE: 'store/v2/store/',
        SMS: 'store/sms/',
        WALLET: 'wallet/',
        WALLET_SUPPORT_DEPOSIT: 'wallet/support/deposit',
        DOMAIN: 'store/support/store/',
        PASSWORD: 'user/support/temp-password/',
        IMPORT_DIGIKALA_PRODUCTS: 'store/support/store/import-digikala-seller-products/',
        ACTIVATE_TOROB: 'store/support/store/activate_torob/',
        EXPORT_STORES_EXCEL: 'store/support/store/excel/',
        STATISTICS: 'store/admin/statistics/',
    },
};

export default URLS;
