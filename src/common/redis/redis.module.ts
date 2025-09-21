import { Module, Global } from '@nestjs/common';
import { createClient } from 'redis';
import type { RedisClientType } from 'redis';

async function createRedisClient(): Promise<RedisClientType> {
    const client: RedisClientType = createClient({
        socket: {
            host: process.env.REDIS_HOST || 'localhost',
            port: +(process.env.REDIS_PORT ?? '6379'),
        },
        password: process.env.REDIS_PASSWORD,
        database: +(process.env.REDIS_DB ?? '1'),
    });

    client.on('error', err => console.error('[Redis Error]', err));
    client.on('connect', () => console.log('✅ Redis connected'));
    await client.connect();

    return client;
}

@Global()
@Module({
    providers: [
        {
            provide: 'REDIS_SUBSCRIBER',
            useFactory: async () => await createRedisClient(),
        },
        {
            provide: 'REDIS_PUBLISHER',
            useFactory: async () => await createRedisClient(),
        },
    ],
    exports: ['REDIS_SUBSCRIBER', 'REDIS_PUBLISHER'],
})
export class RedisModule { }
