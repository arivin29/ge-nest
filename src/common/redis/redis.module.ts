import { Module, Global } from '@nestjs/common';
import Redis from 'ioredis';
import { createClient } from 'redis';

@Global()
@Module({
    providers: [
        {
            provide: 'REDIS_CLIENT',
            useFactory: async () => {
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
