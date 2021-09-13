module.exports = {
    webpack : (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config
    },
    env     : {
        'MYSQL_HOST'     : '127.0.0.1',
        'MYSQL_PORT'     : '3306',
        'MYSQL_DATABASE' : 'translations',
        'MYSQL_USER'     : 'db_admin',
        'MYSQL_PASSWORD' : 'testtest1',
    }
}