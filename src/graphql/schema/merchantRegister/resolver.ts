const resolver = {
    Query: {
        merchantRegister: () => ({
            getGuild: async (_, { dataSources }) => {
                return dataSources.merchantRegisterAPI.getGuild();
            },
        }),
    },
    Mutation: {
        merchantRegister: () => ({
            otpSend: async ({ content }, { dataSources }) => {
                await dataSources.merchantRegisterAPI.otpSend(content);
            },
            validateOtpToken: async ({ content }, { dataSources }) => {
                return dataSources.merchantRegisterAPI.validateOtpToken(content);
            },
            createProfile: async ({ content }, { dataSources }) => {
                return dataSources.merchantRegisterAPI.createProfile(content);
            },
            checkSub: async ({ domain: sub_domain }, { dataSources }) => {
                return dataSources.merchantRegisterAPI.checkSub({ sub_domain });
            },
            sendSmsForgetPassword: async ({ content }, { dataSources }) => {
                return dataSources.merchantRegisterAPI.sendSmsForgetPassword(content);
            },
            merchantCheckOtp: async ({ content }, { dataSources }) => {
                await dataSources.merchantRegisterAPI.merchantCheckOtp(content);
            },
            changePasswordRegister: async ({ content }, { dataSources }) => {
                await dataSources.merchantRegisterAPI.changePasswordRegister(content);
            },
        }),
    },
};

export default resolver;
