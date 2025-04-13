import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TenantService } from './database/tenant/tenant.service';
import { RouterModule } from '@nestjs/core';
import { routerConfig } from './router.config';
import { AuthMiddleware } from './common/middleware/auth.middleware'; 
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from './config/config.module'; 
import { AuthModule } from './auth/auth.module'; 
import { AuthProtectedModule } from './auth/auth-protected.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { DatabaseAclModule } from './config/database.acl.providers';
import { DatabaseDocumentModule } from './config/database.document.providers';
import { DatabasePelangganModule } from './config/database.pelanggan.providers';
import { DatabaseToolsModule } from './config/database.tools.providers';
@Module({
    imports: [JwtModule.registerAsync({
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
        DatabaseAclModule,
         DatabaseDocumentModule,
         DatabasePelangganModule,
         DatabaseToolsModule,
    RouterModule.register(routerConfig),
        AuthModule, AuthProtectedModule, 
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
