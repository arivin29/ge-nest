// src/modules/auth/auth-protected.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthProtectedController } from './auth-protected.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Users } from 'src/modules/users/entities/users.entity';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserTokensModule } from 'src/modules/user_tokens/user_tokens.module';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
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
