const env = use('env');
module.exports = {
    /*
     * db user name
     */
    user: env("DB_USER_NAME"),
    /*
     * db host
     */
    host: env("DB_HOST_NAME"),
    /*
     * db name
     */
    dbName: env("DB_NAME"),
    /*
     * maximum pool
     */
    max:100,
    /*
     * password
     */
    password: env("DB_PASSWORD"),
    /*
     * db port
     */
    port: env("DB_PORT"),
    /*
     * idle timeout in milli second
     */
    idleTimeout: 30000,
    /*
     * connection timeout
     */
    connectionTimeout: 5000
}