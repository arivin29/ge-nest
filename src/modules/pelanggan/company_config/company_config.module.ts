import { CompanyConfigWidgetController } from './company_config_widget.controller';
import { CompanyConfigWidgetService } from './company_config_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyConfigService } from './company_config.service';
import { CompanyConfigController } from './company_config.controller';
import { PelangganCompanyConfig } from 'src/entities/pelanggan';
import { CompanyConfigReportController } from './company_config_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganCompanyConfig],'pelanggan')],
  controllers: [CompanyConfigController, CompanyConfigReportController, CompanyConfigWidgetController],
  providers: [CompanyConfigService, CompanyConfigWidgetService],
})
export class CompanyConfigModule {}
