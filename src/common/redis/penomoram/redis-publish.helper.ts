import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

const isRedisEnabled = () =>
    (process.env.REDIS_ENABLED ?? 'true').toLowerCase() !== 'false';

@Injectable()
export class RedisPublishHelperPenormoran {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redisClient: RedisClientType,
    ) { }

    async publishDocumentNumberingEvent(payload: {
        forModule: string;
        forModuleId: string;
        id_users: string;
        trigger?: string; // optional, misal: 'update', 'workflow'
    }) {
        if (!isRedisEnabled()) {
            console.warn('⚠️ Redis publish skipped (Redis disabled)');
            return;
        }

        await this.redisClient.publish('document_numbering', JSON.stringify(payload));
    }
}
