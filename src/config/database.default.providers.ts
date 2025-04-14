import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AclEntities } from '../entities/acl';

export const DatabaseDefaultModule = TypeOrmModule.forRootAsync({ 
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: 'erp_acl',
    entities: AclEntities,
    synchronize: false,
  }),
});
