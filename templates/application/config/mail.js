const env = use('env')
module.exports = {
    /*
     * mail host
     */
    host : env("EMAIL_HOST"),
    /*
     * mail port
     */
    port : env("EMAIL_PORT"),
    /*
     * secure
     */
    secure : false,
    /*
     * tls un authorize
     */
    rejectUnauthorized : false,
    /*
     * from mail
     */
    fromMail : env('FROM_MAIL'),
    /*
     * test mail for development
     */
    testMail : env('TEST_MAIL'),
    /*
     * enable production mode
     */
    productionMode : ["prod"]
}