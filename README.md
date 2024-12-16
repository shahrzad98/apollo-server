api calls used in this project:

METHOD  ENDPOINT                                      MUTATION/QUERY                      USED

CUSTOMER:   
POST    user/token/                                   //getCookie getToken                  +
POST    user/token/refresh/                           //getRefreshToken                     +
GET     user/check/{phone_number}/                    //userCheck                           +
GET     user/info/                                    //getUserInfo                         +
GET     user/v2/read/0/                               //getUserRead                         +

GET     ticket/ticket/{store_id}/                     //getTickets                          X
POST    ticket/ticket/{store_id}/                     //createTicket                        X
GET     ticket/ticket/{store_id}/{id}                 //getTicket                           X
PUT     ticket/ticket/{store_id}/{id}                 //updateTicket                        X
PATCH   ticket/ticket/{store_id}/{id}                 //partialUpdateTicket                 X
DELETE  ticket/ticket/{store_id}/{id}                 //deleteTicket                        X
GET     ticket/support/                               //getAdminTickets                     +
PUT     ticket/support/{store_id}                     //seeTicket                           +

GET     order/v2/shipping/{store_id}/                 //getShippingMethods                  +
GET     order/v2/shipping/{store_id}/{id}/            //getShippingMethodDetail             +
POST    order/v2/shipping/{store_id}/                 //createNewShipping                   +
PATCH   order/v2/shipping/{store_id}/{id}/            //editShipping                        +
DELETE  order/v2/shipping/{store_id}/{id}/            //deleteShipping                      +
GET     order/post/207/get_provinces_cities/          //getProvincesCities                  +
GET     https://api.neshan.org/v4/reverse             //getNeshanCity                       +
GET     order/shipping/digiexpress/active-cities/     //getDigiExpressActiveCities          +
GET     order/postex/{store_id}/get_postex_password/  //sendPostexSms                       +

GET     payment/payment-info/{store_id}/              //getPaymentMethods                   +  
GET     payment/payment-info/{store_id}/{id}/         //getPaymentMethod                    +
POST    payment/payment-info/{store_id}/              //createNewPaymentMethod              +
PATCH   payment/payment-info/{store_id}/{id}/         //editPaymentMethod                   +
PUT     payment/payment-info/{store_id}/{id}/         //editCardToCard                      +
DELETE  payment/payment-info/{store_id}/{id}/         //deletePaymentMethod                 +

GET     customer/address/                             //getAddresses                        +
GET     customer/address/{id}/                        //getAddress                          X 
POST    customer/address/                             //createAddress                       +
PUT     customer/address/{id}/                        //updateAddress                       +
PATCH   customer/address/{id}/                        //partialUpdateAddress                +
DELETE  customer/address/{id}/                        //deleteAddress                       +

GET     customer/basket/{store_id}/{uuid}/            //getBasket                           +
PATCH   customer/basket/{store_id}/{uuid}/            //partialUpdateBasket                 +
PUT     customer/basket/{store_id}/{uuid}/            //updateBasket                        +

GET     customer/v2/category/{stoer_id}/              //getCategories                       +
GET     customer/v2/category/{stoer_id}/{id}          //getCategory                         +
GET     customer/v2/category/{stoer_id}/{id}/parent-data/          //getBreadcrumb          +

POST    customer/change-password/                     //forgetPassword                      +       
PUT     customer/change/                              //changePassword                      X
PATCH   customer/change/password/                     //changePasswordWithoutOtp            +
POST    customer/otp-send/                            //otpSend                             X   
POST    customer/otp-send/{store_id}/signup/          //otpSendSignup                       +
POST    customer/v2/otp-send/{store_id}/              //otpSendV2                           +
POST    customer/otp-token/                           //getChangePasswordAuth               +

GET     customer/collection/{store_id}/               //getCollections                      +
GET     customer/collection/{store_id}/{id}/          //getCollection                       X

GET     customer/collection/products/{store_id}/      //getCollectionsWithProducts          X  
GET     customer/v2/collection/products/{store_id}/   //getCollectionsWithProductsV2        +

GET     customer/tag/{store_id}/                      //getTags                             +
GET     customer/tag/{store_id}/{id}/                 //getTag                              X

POST    customer/store-opening-notifier/{store_id}/   //createStoreOpeningNotifier          +

GET     customer/favorite/{store_id}/is_favorite/{id}/     //isFavorite                     +
PUT     customer/favorite/{store_id}/add/{id}/             //addFavorite                    +
PUT     customer/favorite/{store_id}/add/list/             //addFavoriteList                +
DELETE  customer/favorite/{store_id}/remove/{id}/          //removeFavorite                 +
GET     customer/favorites/{store_id}/                     //getFavorites                   +
GET     customer/favorites/{store_id}/{id}/                //getFavorite                    X
GET     customer/v2/favorites/{store_id}/                  //getFavoritesV2                 +
GET     customer/v2/favorites/{store_id}/{id}/             //getFavoriteV2                  X

GET     customer/v2/order/{store_id}/                 //getOrders                           +             
GET     customer/v2/order/{store_id}/{id}/            //getOrder                            +
DELETE  customer/v2/order/{store_id}/{id}/            //cancelOrder                         +

GET     customer/v3/order/{store_id}/                 //getOrdersV3                         +
GET     customer/v3/order/{store_id}/{id}/            //getOrderV3                          +
DELETE  customer/v3/order/{store_id}/{id}/            //cancelOrderV3                       X

GET     customer/v2/returns/{store_id}/               //getReturnOrders                     X
GET     customer/v2/returns/{store_id}/{id}/          //getReturnedOrder                    +
POST    customer/v2/returns/{store_id}/{id}/          //returnOrder                         +

GET     customer/order/add/{store_id}/                //getOrderAdd                         X
PUT     customer/order/add/{store_id}/                //updateOrderAdd                      X

POST    customer/v3/order/create/{store_id}/             //createOrder                      +   
GET     customer/order/receive-status/{store_id}/{id}/   //getReceiveStatus                 X     
PUT     customer/order/receive-status/{store_id}/{id}/   //updateReceiveStatus              +

POST    customer/order/get_gateway/{store_id}/{id}/      //getGateway                       +
PUT     customer/order/receive-status/{store_id}/{id}/   //unrecivedOrder                   +

GET     customer/product/feedback/                       //getProductFeedback               +

GET     customer/product/hot-offer/{store_id}/           //getHotOffers                     +
GET     customer/product/hot-offer/{store_id}/{id}/      //getHotOffer                      X

GET     customer/appearance/                             //getAppearance                    +
GET     customer/profile/                                //getProfile                       +
POST    customer/profile/                                //createProfile                    +
PUT     customer/profile/                                //updateProfile                    +

POST    customer/report-available/                       //reportAvailable                  X

GET     customer/product/{store_id}/                             //getProducts              +
GET     customer/product/{store_id}/{id}/                        //getProduct               +
GET     customer/product/{store_id}/{id}/category/parent-data/   //getBreadcrumb            +

GET     customer/product-filtering/                      //productFiltering                 +

GET     customer/v2/product/suggestion/                  //getSuggestionProducts            +

GET     customer/user-notify/{store_id}/{id}/            //getUserNotify                    +
POST    customer/user-notify/{store_id}/                 //createUserNotify                 +
DELETE  customer/user-notify/{store_id}/{id}/            //deleteUserNotify                 X

GET     customer/loyalty-logs/{store_id}/                //getLoyaltyLogs                   +
GET     customer/get_loyalty_credit/                     //getLoyaltyCredit                 +

GET     customer/v2/get_loyalty_credit/                  //getLoyaltyCreditV2               +

POST    customer/loyalty-gift/{store_id}/                //createLoyaltyGift                +

GET     customer/v2/store/                               //getStoreInfo                     +
GET     customer/notification-setting/{store_id}/        //getNotificationSetting           +
PUT     customer/notification-setting/{store_id}/        //updateNotificationSetting        +

GET     notif/online-store/token/{store_id}/             //getNotificationToken             X

GET     notif/online-store/                              //getOnlineStoreNotification       +  

GET     customer/shipping-address/{store_id}/{address_id}/         //getShippingAddresses   +
GET     customer/shipping-address/{store_id}/{address_id}/{id}/    //getShippingAddress     +

GET     customer/pocket/{store_id}/                      //getPocket                        +
GET     customer/variants/stock/{store_id}/{ids}/        //getVariantsStock                 +
POST    customer/return-image/{store_id}/                //returnImage                      +

POST    customer/payment/card/{store_id}/{id}/           //paymentCard                      +

GET     customer/payment/types/{store_id}/               //getTransactionTypes              +

GET     themes/{store_id}/custom/{theme_name}/           //getThemeCustomization            +
POST    themes/{store_id}/custom/                        //createThemeCustomization         +
PUT     themes/{store_id}/custom/{theme_name}/           //updateThemeCustomization         +

GET     customer/user/{store_id}/type/                   //getUserType                      +       

GET     customer/blogs/{store_id}/article/               //getBlogArticles                  +
GET     customer/blogs/{store_id}/article/{id}           //getBlogArticle                   +
GET     customer/blogs/{store_id}/highlight/             //getBlogHighlights                +
POST    customer/blogs/{store_id}/article/{id}/like/     //likeBlogArticle                  +

GET     customer/sitemap/{store_id}/                     //getSitemap                       +

GET     customer/shipping-address-socket/                //getShippingSokect                +


MERCHANT_REGISTER:

POST    user/merchant/otp/                               //otpSend                          +
POST    store/temp-token/                                //validateOtpToken                 +               
POST    store/v2/brand-create/                           //createProfile                    +
GET     store/guild/                                     //getGuild                         +
PUT     store/domain/sub/check/                          //checkSub                         +
POST    user/otp-user/forget-password/                   //sendSmsForgetPassword            +
POST    user/forget-password/token/                      //merchantCheckOtp                 +
PSOT    user/forget-password/                            //changePasswordRegister           +

PROMOTION:
POST    promotion/voucher/check/{store_id}/              //voucherCheck                     +

NOTIFICATION:
GET     notif/online-store/token/{store_id}/             //getToken                         X
PSOT    notif/online-store/modify/{store_id}/            //deleteNotif  seenNotif           X
GET     notif/token/{stoer_id}/                          //getTokenPanel                    +
POST    notif/business-token/                            //getBusinessWsToken               +

PACKAGES:
GET     packages/package/                                //getPackages                      +       
GET     packages/package/{id}/                           //getPackage                       X
POST    packages/package/                                //createPackage                    X         
PUT     packages/package/{id}/                           //updatePackage                    X
PATCH   packages/package/{id}/                           //partialUpdatePackage             X
DELETE  packages/package/{id}/                           //deletePackage                    X

GET     packages/purchase-package/                       //getPurchasedPackages-  getPackagesByVoucher-  getPurchasePackages+
GET     packages/purchase-package/{id}                   //getPurchasedPackage              X
POST    packages/purchase-package/                       //createPurchasedPackage-  buyPackage+
PUT     packages/purchase-package/{id}                   //updatePurchasedPackage           X
PATCH   packages/purchase-package/{id}                   //partialUpdatePurchasedPackage    X
DELETE  packages/purchase-package/{id}                   //deletePurchasedPackage           X

GET     packages/voucher/                                //getVouchersOfSafirs              +
POST    packages/voucher/                                //createVoucher                    +           
GET     packages/voucher/{id}                            //getVoucher                       +
DELETE  packages/voucher/{id}                            //deleteVoucher                    X
PUT     packages/voucher/{id}                            //updateVoucher                    X
PATCH   packages/voucher/{id}                            //partialUpdateVoucher             +
GET     packages/voucher/digify/                         //getVouchers                      +

GET     packages/safir/                                  //getSafirs                        +
POST    packages/safir/                                  //createSafir                      +
PATCH   packages/safir/{id}/                             //partialUpdateSafir               +
PUT     packages/safir/{id}/                             //updateSafir                      X
DELETE  packages/safir/{id}/                             //deleteSafir                      +
GET     packages/safir/{id}/                             //getSafir                         X

GET     packages/purchase-package/current_package/?store={store_id}    //getCurrentPackage  +

GET     packages/voucher/check                           //checkPackageVoucher              +

POST    payment/sms-charge/{store_id}/                   //chargeSms                        +
GET     payment/v4/payment/{store_id}/                   //getFinancialData                 +

GET     packages/purchase-package/?store={store_id}&is_reserved=true    //getReservedPackages  +

ITEM:

GET     item/v2/product/{store_id}/                      //getProducts                      +
POST    item/v2/product/{store_id}/                      //createProduct                    +
GET     item/v2/product/{store_id}/{id}                  //getProduct                       +
PUT     item/v2/product/{store_id}/{id}                  //updateProduct                    +            
PATCH   item/v2/product/{store_id}/{id}                  //partialUpdateProduct             +
DELETE  item/v2/product/{store_id}/{id}                  //deleteProduct                    +

GET     item/v2/category/{store_id}/                     //getCategories                    +
POST    item/v2/category/{store_id}/                     //createCategory                   +
GET     item/v2/category/{store_id}/{id}/                //getCategory                      +
PUT     item/v2/category/{store_id}/{id}/                //updateCategory                   X         
PATCH   item/v2/category/{store_id}/{id}/                //partialUpdateCategory            +
DELETE  item/v2/category/{store_id}/{id}/                //deleteCategory                   +

GET     item/option-value/{store_id}/                    //getOptionValues                  X
POST    item/option-value/{store_id}/                    //createOptionValue                X
GET     item/option-value/{store_id}/{id}                //getOptionValue                   X
PUT     item/option-value/{store_id}/{id}                //updateOptionValue                X
PATCH   item/option-value/{store_id}/{id}                //partialUpdateOptionValue         X
DELETE  item/option-value/{store_id}/{id}                //deleteOptionValue                X

GET     item/option/{store_id}                           //getOptions                       X
POST    item/option/{store_id}                           //createOption                     X
GET     item/option/{store_id}/{id}                      //getOption                        X
PUT     item/option/{store_id}/{id}                      //updateOption                     X
DELETE  item/option/{store_id}/{id}                      //deleteOption                     X

GET     item/brief/{store_id}/                           //getItemsBrief                    +
POST    item/image/                                      //uploadImage                      +
GET     item/variant/{store_id}/{id}                     //getVariant                       +
PATCH   item/variant/{store_id}/{id}                     //partialUpdateVariant             +
GET     item/v2/product/{store_id}/get_filter_primaries/ //getProductsFilterPrimsMerchant   +

GET     promotion/v2/voucher/{store_id}/                 //getVouchers                      +
POST    promotion/v2/voucher/{store_id}/                 //createVoucher                    +
GET     promotion/v2/voucher/{store_id}/{id}             //getVoucher                       X
PATCH   promotion/v2/voucher/{store_id}/{id}             //partialUpdateVoucher             X
DELETE  promotion/v2/voucher/{store_id}/{id}             //deleteVoucher                    +


ORDER:

GET     order/v3/manager/{store_id}/                              //getManagers                 +
GET     order/v3/manager/{store_id}/{id}                          //getManager                  +
PUT     order/v3/manager/{store_id}/{id}                          //updateManager               X
PATCH   order/v3/manager/{store_id}/{id}                          //partialUpdateManager        +
PUT     order/v3/manager/{store_id}/{id}/update-receive-status/   //updateManagerReceiveStatus  X
GET     order/v3/manager/{store_id}/{id}/get_filter_primaries/    //getManagersFilterPrimaries  +
GET     order/v3/manager/{store_id}/{id}/order_status_count/      //getManagersStatusCount      +

GET     order/status/{store_id}/{id}/                     //getOrderStatus                      X
PUT     order/status/{store_id}/{id}/                     //updateOrderStatus                   +
PATCH   order/status/{store_id}/{id}/                     //partialUpdateOrderStatus            X

GET     order/post/{store_id}/get_provinces_cities/       //getPostProvincesCities              +
GET     order/post/{store_id}/get_cartoons_insurances/    //getPostCartoonsInsurances           +

GET     order/postex/{store_id}/postex_info/              //getPostexInfo                       +
PATCH   order/postex/{store_id}/postex_info/              //partialUpdatePostexInfo             +
GET     order/postex/{store_id}/get_postex_password/      //getPostexPassword                   +

GET     order/send/{store_id}/{id}/                       //getOrderSend                        +
PUT     order/send/{store_id}/{id}/                       //updateOrderSend                     +
PATCH   order/send/{store_id}/{id}/                       //partialUpdateOrderSend              X
PUT     order/send/{store_id}/{id}/cancel-shipping/       //cancelShipping                      +

GET     order/brief/{store_id}/                           //getOrdersBrief                      +
POST    store/shipping-wallet/{store_id}/                 //chargeAloPeykWallet                 +


STORE:

GET     store/support/brand/                              //getBrands                           +
GET     store/details/{store_id}/                         //getHomeData                         +
GET     store/support/store/                              //getStores                           +
GET     store/support/store/{store_id}/                   //getStoreDetail                      +
GET     store/support/store/{store_id}/services_detail/   //getStoreServiceDetail               +
PUT     store/support/store/{store_id}/services_detail/   //updateStoreServiceDetail            +
PATCH   store/v2/store/{store_id}/                        //editStoreData                       +

GET     store/sms/{brand_id}/                             //getSmsData                          +
PATCH   store/sms/{brand_id}/                             //patchSmsData                        +
GET     wallet/{store_id}/wallet-balance/                 //getWalletData                       +
POST    wallet/{store_id}/deposit/                        //chargeWallet                        +

PUT     store/support/store/{store_id}/set_custom_domain/ //updateCustomDomain                  +
GET     user/support/temp-password/{phone_number}/        //getStorePassword                    +
POST    wallet/support/deposit                            //adminChargeWallet                   +
POST    store/support/store/import-digikala-seller-products/{store_id} //importDigikalaProducts +
POST     store/support/store/activate_torob/               //activateTorob                      +
GET     store/support/store/excel/                        //exportStoresExcel                   +
GET     store/admin/statistics                            //getStatistics                       +
