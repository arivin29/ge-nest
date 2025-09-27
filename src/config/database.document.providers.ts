import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocumentEntities } from '../entities/document';

export const DatabaseDocumentModule = TypeOrmModule.forRootAsync({
  name: 'document',
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: 'erp_document',
    entities: DocumentEntities,
    synchronize: false,
  }),
});
