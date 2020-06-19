const env = use('env')
module.exports = {
    /*
     * is active
     */
    isActive : true,
    /*
     * cas url
     */
    casUrl : env("CAS_URL"),
    /*
     * service url
     */
    serviceUrl : env("CAS_SERVICE_URL"),
    /*
     * is dev mode
     */
    isDevMode : env("NODE_ENV") === undefined || env("NODE_ENV") === 'test',
    /*
     * test user for dev mode
     */
    testUser : "shunmugam",
    /*
     * session name
     */
    sessionName : "cas_user",
    /*
     * session name for info
     */
    sessionInfo : "cas_userinfo",
    /*
     * destroy session after logout
     */
    destroySession: true,
    /*
     * cas return after login
     */
    returnTo : env("CAS_RETURN_TO"),
    /*
     * version
     */
    version : '3.0',
    /*
     * renew
     */
    renew : false
}