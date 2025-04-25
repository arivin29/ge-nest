import { Inject, Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis'; // pastikan pakai nestjs-redis atau ioredis langsung

@Injectable()
export class RedisPublishHelperPenormoran {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redisClient: any, // pakai ioredis type kalau ada
    ) { }

    async publishDocumentNumberingEvent(payload: {
        forModule: string;
        forModuleId: string;
        id_users: string;
        trigger?: string; // optional, misal: 'update', 'workflow'
    }) {
        await this.redisClient.publish('document_numbering', JSON.stringify(payload));
    }
}
