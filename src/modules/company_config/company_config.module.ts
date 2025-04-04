import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyConfigService } from './company_config.service';
import { CompanyConfigController } from './company_config.controller';
import { CompanyConfig } from './entities/company_config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyConfig])],
  controllers: [CompanyConfigController],
  providers: [CompanyConfigService],
})
export class CompanyConfigModule {}
