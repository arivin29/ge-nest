import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
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

import { UsersModule } from './modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from './config/config.module';
import { UserTokensModule } from './modules/user_tokens/user_tokens.module';
import { AuthModule } from './auth/auth.module';
import { ModuleModule } from './modules/module/module.module';
import { UserGroupAccessModule } from './modules/user_group_access/user_group_access.module';
import { UserGroupModule } from './modules/user_group/user_group.module';
import { ClientContactModule } from './modules/client_contact/client_contact.module';
import { ContractJenisModule } from './modules/contract_jenis/contract_jenis.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
            }),
        }),
        AppConfigModule,
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get('JWT_SECRET'),
                signOptions: { expiresIn: '6h' },
            }),
        }),
        ConfigModule.forRoot({ isGlobal: true }),
        CentralDatabaseModule,
        RouterModule.register(routerConfig),
        AuthModule, AuthProtectedModule,
        ClientModule, ClientSiteModule, CompanyConfigModule, ContactClientUseModule, ContractModule, ContractSiteModule, ContractSiteServiceModule,
        CustomFieldModule, CustomFieldValueModule, FakturModule, InvoiceModule, KantorModule, ServiceModule, WorkScheduleModule,
        WorkScheduleTeknisiModule, UsersModule, UserTokensModule, ModuleModule, UserGroupAccessModule, UserGroupModule, ClientContactModule, ContractJenisModule
    ],
    controllers: [AppController],
    providers: [AppService, TenantService, JwtStrategy],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes('auth');
    }
}
