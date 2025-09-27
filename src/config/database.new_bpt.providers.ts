import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NewBptEntities } from '../entities/new_bpt';

export const DatabaseNewBptModule = TypeOrmModule.forRootAsync({
  name: 'new_bpt',
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: 'new_bpt',
    entities: NewBptEntities,
    synchronize: false,
  }),
});
