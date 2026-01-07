import { Module, Global } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

const isRedisEnabled = () =>
    (process.env.REDIS_ENABLED ?? 'true').toLowerCase() !== 'false';

const createDisabledClient = (): RedisClientType => {
    const noopAsync = async () => undefined;
    const noop = () => undefined;

    console.warn('⚠️ Redis disabled via REDIS_ENABLED flag');

    return {
        connect: noopAsync,
        publish: async () => {
            console.warn('⚠️ Redis publish skipped (disabled)');
            return 0;
        },
        subscribe: async () => {
            console.warn('⚠️ Redis subscribe skipped (disabled)');
        },
        on: noop,
        quit: noopAsync,
        disconnect: noopAsync,
    } as unknown as RedisClientType;
};

@Global()
@Module({
    providers: [
        {
            provide: 'REDIS_CLIENT',
            useFactory: async () => {
                if (!isRedisEnabled()) {
                    return createDisabledClient();
                }

                const client = createClient({
                    socket: {
                        host: process.env.REDIS_HOST || 'localhost',
                        port: +(process.env.REDIS_PORT ?? '6379'),
                    },
                    password: process.env.REDIS_PASSWORD,
                    database: +(process.env.REDIS_DB ?? '1'),
                });

                client.on('error', err => console.error('[Redis Error]', err));
                client.on('connect', () => console.log('✅ Redis connected'));

                return client;
            },
        },
    ],
    exports: ['REDIS_CLIENT'],
})
export class RedisModule { }
