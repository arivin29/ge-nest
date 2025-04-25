import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TenantService } from './database/tenant/tenant.service';
import { APP_GUARD, ModuleRef, RouterModule } from '@nestjs/core';
import { routerConfig } from './router.config';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { UserTokensModule } from './modules/acl/user_tokens/user_tokens.module';
import { UsersModule } from './modules/acl/users/users.module';
import { DatabaseProviders } from './config/database.providers';
import { getDataSourceToken } from '@nestjs/typeorm';
import { dataSourceMap } from './config/data-source-map';
import { WorkflowModule } from './modules/tools/workflow/workflow.module';
import { WorkflowStepModule } from './modules/tools/workflow_step/workflow_step.module';
import { WorkflowLogModule } from './modules/tools/workflow_log/workflow_log.module';
import { UserGroupModule } from './modules/acl/user_group/user_group.module';
import { WorkflowAggregatorModule } from './modules/tools/workflow_aggregator/workflow_aggregator.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CustomFieldGroupModule } from './modules/tools/custom_field_group/custom_field_group.module';
import { CustomFieldModule } from './modules/tools/custom_field/custom_field.module';
import { CustomFieldValueModule } from './modules/tools/custom_field_value/custom_field_value.module';
import { ModuleModule } from './modules/acl/module/module.module';
import { DocumentModule } from './modules/document/document/document.module';
import { DocumentNumberingModule } from './modules/tools/document_numbering/document_numbering.module';
import { DocumentNumberingCounterModule } from './modules/tools/document_numbering_counter/document_numbering_counter.module';
import { RedisModule } from './common/redis/redis.module';
import { RedisDocumentNumberingWorkerService } from './common/redis/penomoram/document-numbering.worker';


import { ClientModule } from './modules/pelanggan/client/client.module';
import { ClientContactModule } from './modules/pelanggan/client_contact/client_contact.module';
import { ClientSiteModule } from './modules/pelanggan/client_site/client_site.module';
import { CompanyConfigModule } from './modules/pelanggan/company_config/company_config.module';
import { ContactClientUseModule } from './modules/pelanggan/contact_client_use/contact_client_use.module';
import { ContractModule } from './modules/pelanggan/contract/contract.module';
import { ContractJenisModule } from './modules/pelanggan/contract_jenis/contract_jenis.module';
import { ContractSiteModule } from './modules/pelanggan/contract_site/contract_site.module';
import { ContractSiteServiceModule } from './modules/pelanggan/contract_site_service/contract_site_service.module';
import { FakturModule } from './modules/pelanggan/faktur/faktur.module';
import { InvoiceModule } from './modules/pelanggan/invoice/invoice.module';
import { KantorModule } from './modules/pelanggan/kantor/kantor.module';
import { ServiceModule } from './modules/pelanggan/service/service.module';
import { TeknisiModule } from './modules/pelanggan/teknisi/teknisi.module';
import { WorkScheduleModule } from './modules/pelanggan/work_schedule/work_schedule.module';
import { WorkScheduleTeknisiModule } from './modules/pelanggan/work_schedule_teknisi/work_schedule_teknisi.module';
const COM = [
    ClientModule,
    ClientContactModule,
    ClientSiteModule,
    CompanyConfigModule,
    ContactClientUseModule,
    ContractModule,
    ContractJenisModule,
    ContractSiteModule,
    ContractSiteServiceModule,
    FakturModule,
    InvoiceModule,
    KantorModule,
    ServiceModule,
    TeknisiModule,
    WorkScheduleModule,
    WorkScheduleTeknisiModule
];

@Module({
    imports: [JwtModule.registerAsync({
        useFactory: () => ({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
        }),
    }),
        AppConfigModule,

    JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            secret: config.get('JWT_SECRET'),
            signOptions: { expiresIn: '6h' },
        }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ...DatabaseProviders,
    RouterModule.register(routerConfig),
        AuthModule, AuthProtectedModule,
        UserTokensModule, UsersModule, DocumentModule,
        WorkflowModule, WorkflowLogModule, WorkflowStepModule, UserGroupModule,
        WorkflowAggregatorModule, ModuleModule,
        CustomFieldGroupModule, CustomFieldModule, CustomFieldValueModule,
        DocumentNumberingModule, DocumentNumberingCounterModule,
        PassportModule,
        RedisModule,
    ...COM
    ],
    controllers: [AppController],
    providers: [
        AppService, TenantService, JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        },
        RedisDocumentNumberingWorkerService
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes('auth');
    }
    constructor(private moduleRef: ModuleRef) { }

    async onModuleInit() {
        const dbNames = ['acl', 'document', 'pelanggan', 'tools'];

        for (const db of dbNames) {
            const ds = await this.moduleRef.get(getDataSourceToken(db), { strict: false });
            dataSourceMap[db] = ds;
        }

        console.log('✅ DataSourceMap is ready:', Object.keys(dataSourceMap));
    }
}
