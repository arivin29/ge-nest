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
import { DatabaseProviders } from './config/database.providers';
import { getDataSourceToken } from '@nestjs/typeorm';
import { dataSourceMap } from './config/data-source-map';
import { WorkflowModule } from './modules/tools/workflow/workflow.module';
import { WorkflowStepModule } from './modules/tools/workflow_step/workflow_step.module';
import { WorkflowLogModule } from './modules/tools/workflow_log/workflow_log.module'; 
import { WorkflowAggregatorModule } from './modules/tools/workflow_aggregator/workflow_aggregator.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CustomFieldGroupModule } from './modules/tools/custom_field_group/custom_field_group.module';
import { CustomFieldModule } from './modules/tools/custom_field/custom_field.module';
import { CustomFieldValueModule } from './modules/tools/custom_field_value/custom_field_value.module'; 
import { DocumentNumberingModule } from './modules/tools/document_numbering/document_numbering.module';
import { DocumentNumberingCounterModule } from './modules/tools/document_numbering_counter/document_numbering_counter.module';
// import { RedisModule } from './common/redis/redis.module';
// import { RedisDocumentNumberingWorkerService } from './common/redis/penomoram/document-numbering.worker';
import { UserTokensModule } from './modules/acl/user_tokens/user_tokens.module';
import { UsersModule } from './modules/acl/users/users.module';
import { ModuleModule } from './modules/acl/module/module.module';
import { UserGroupModule } from './modules/acl/user_group/user_group.module';

 
const COM = [
   
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
        UserTokensModule, UsersModule,  
        WorkflowModule, WorkflowLogModule, WorkflowStepModule, UserGroupModule,
        WorkflowAggregatorModule, ModuleModule,
        CustomFieldGroupModule, CustomFieldModule, CustomFieldValueModule,
        DocumentNumberingModule, DocumentNumberingCounterModule,
        PassportModule,
        // RedisModule,
    ...COM
    ],
    controllers: [AppController],
    providers: [
        AppService, TenantService, JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        },
        // RedisDocumentNumberingWorkerService
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
        const dbNames = ['acl',  'tools'];

        for (const db of dbNames) {
            const ds = await this.moduleRef.get(getDataSourceToken(db), { strict: false });
            dataSourceMap[db] = ds;
        }

        console.log('✅ DataSourceMap is ready:', Object.keys(dataSourceMap));
    }
}
