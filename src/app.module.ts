import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TenantService } from './database/tenant/tenant.service';
import { ModuleRef, RouterModule } from '@nestjs/core';
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
import { ContractSiteModule } from './modules/pelanggan/contract_site/contract_site.module';
import { KantorModule } from './modules/pelanggan/kantor/kantor.module';
import { ContractJenisModule } from './modules/pelanggan/contract_jenis/contract_jenis.module';
import { ClientSiteModule } from './modules/pelanggan/client_site/client_site.module';
import { WorkflowModule } from './modules/acl/workflow/workflow.module';
import { WorkflowStepModule } from './modules/acl/workflow_step/workflow_step.module';
import { WorkflowLogModule } from './modules/acl/workflow_log/workflow_log.module';
import { ClientModule } from './modules/acl/client/client.module';
import { ContractModule } from './modules/pelanggan/contract/contract.module';
import { ClientContactModule } from './modules/pelanggan/client_contact/client_contact.module';
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
        UserTokensModule, UsersModule,
        ContractModule, ContractJenisModule, KantorModule, ContractSiteModule, ClientModule,
        ClientSiteModule,
        WorkflowModule, WorkflowLogModule, WorkflowStepModule, ClientContactModule,
        PassportModule],
    controllers: [AppController],
    providers: [AppService, TenantService, JwtStrategy],
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
