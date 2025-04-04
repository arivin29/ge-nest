import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CentralDatabaseModule } from './config/database.config';
import { TenantService } from './database/tenant/tenant.service';
import { RouterModule } from '@nestjs/core';
import { routerConfig } from './router.config';
import { AuthMiddleware } from './common/middleware/auth.middleware';

import { ClientModule } from './modules/client/client.module';
import { ClientSiteModule } from './modules/client_site/client_site.module';
import { CompanyConfigModule } from './modules/company_config/company_config.module';
import { ContactClientUseModule } from './modules/contact_client_use/contact_client_use.module';
import { ContractModule } from './modules/contract/contract.module';
import { ContractSiteModule } from './modules/contract_site/contract_site.module';
import { ContractSiteServiceModule } from './modules/contract_site_service/contract_site_service.module';
import { CustomFieldModule } from './modules/custom_field/custom_field.module';
import { CustomFieldValueModule } from './modules/custom_field_value/custom_field_value.module';
import { FakturModule } from './modules/faktur/faktur.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { KantorModule } from './modules/kantor/kantor.module';
import { ServiceModule } from './modules/service/service.module';
import { WorkScheduleModule } from './modules/work_schedule/work_schedule.module';
import { WorkScheduleTeknisiModule } from './modules/work_schedule_teknisi/work_schedule_teknisi.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
        CentralDatabaseModule,
    RouterModule.register(routerConfig),
     ClientModule, ClientSiteModule, CompanyConfigModule, ContactClientUseModule, ContractModule, ContractSiteModule, ContractSiteServiceModule, CustomFieldModule, CustomFieldValueModule, FakturModule, InvoiceModule, KantorModule, ServiceModule, WorkScheduleModule, WorkScheduleTeknisiModule],
    controllers: [AppController],
    providers: [AppService, TenantService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes('auth');
    }
}
