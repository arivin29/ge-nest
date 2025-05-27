import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AmimsEntities } from '../entities/amims';

export const DatabaseAmimsModule = TypeOrmModule.forRootAsync({
  name: 'amims',
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: 'erp_amims',
    entities: AmimsEntities,
    synchronize: false,
  }),
});
