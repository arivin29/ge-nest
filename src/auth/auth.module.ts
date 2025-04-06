import { Module } from '@nestjs/common'; 
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from 'src/modules/users/users.module';
import { UserTokensModule } from 'src/modules/user_tokens/user_tokens.module';

@Module({
    imports: [
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
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule { }
