// Update with your config settings.
/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * knex config
 */
module.exports = {

    development: {

        client: 'pg',
        version: '7.2',
        connection: {
            // filename: './dev.sqlite3'
            host: '127.0.0.1',
            user: 'postgres',
            password: 'docker',
            database: 'Heroes'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'pg',
        version: '7.2',
        connection: {
            // filename: './dev.sqlite3'
            host: '127.0.0.1',
            user: 'postgres',
            password: 'docker',
            database: 'Heroes'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    }

};
