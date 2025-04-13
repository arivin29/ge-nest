// src/modules/auth/auth-protected.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthProtectedController } from './auth-protected.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard'; 
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt'; 
import { AclModule, AclUsers } from 'src/entities/acl';

@Module({
    imports: [
        TypeOrmModule.forFeature([AclUsers]),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('jwt.secret'),
                signOptions: {
                    expiresIn: config.get<string>('jwt.expiresIn'),
                },
            }),
        }),
        AclModule
    ],
    controllers: [AuthProtectedController],
    providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthProtectedModule { }
