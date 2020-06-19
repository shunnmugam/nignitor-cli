const env = use('env');
module.exports = {
    /*
     * is active
     */
    isActive : true,
    /*
     * cors whitelist
     */
    whitelist: env("CORS_WHITELIST")
}