import { join } from 'path';
import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

    synchronize: !!process.env.APP_DB_RESETONSTART,
    migrationsRun: !!process.env.APP_DB_RESETONSTART,
    dropSchema: !!process.env.APP_DB_RESETONSTART,

    entities: [join(__dirname, '../entities/*{.ts,.js}')],
    migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    cli: {
        migrationsDir: join(__dirname, '../migrations'),
    },
};

export = config;