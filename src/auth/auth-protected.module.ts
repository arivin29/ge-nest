// src/modules/auth/auth-protected.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthProtectedController } from './auth-protected.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AclUsers } from 'src/entities/acl';
import { UserTokensModule } from 'src/modules/acl/user_tokens/user_tokens.module';
import { UsersModule } from 'src/modules/acl/users/users.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([AclUsers],'acl'),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('jwt.secret'),
                signOptions: {
                    expiresIn: config.get<string>('jwt.expiresIn'),
                },
            }),
        }),
        UsersModule,
        UserTokensModule
    ],
    controllers: [AuthProtectedController],
    providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthProtectedModule { }
