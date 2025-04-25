import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { DocumentNumberingService } from 'src/modules/tools/document_numbering/document_numbering.service';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisDocumentNumberingWorkerService implements OnModuleInit {
    constructor(
        @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
        private readonly docNumService: DocumentNumberingService,
    ) { }

    async onModuleInit() {
        await this.redis.connect(); // pastikan terkoneksi
        await this.redis.subscribe('document_numbering', async (message) => {
            try {
                const payload = JSON.parse(message);
                console.log('📩 [document_numbering] Event:', payload);

                const { forModule, forModuleId, id_users } = payload;
                await this.docNumService.generateIfEligible(forModule, forModuleId, id_users);
            } catch (err) {
                console.error('❌ RedisWorker error:', err);
            }
        });

        console.log('✅ RedisDocumentNumberingWorkerService aktif!');
    }
}
