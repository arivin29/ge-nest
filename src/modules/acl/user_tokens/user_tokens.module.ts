import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTokensService } from './user_tokens.service';
import { UserTokensController } from './user_tokens.controller';
import { AclUserTokens } from 'src/entities/acl';

@Module({
    imports: [TypeOrmModule.forFeature([AclUserTokens], 'acl')],
    exports: [TypeOrmModule.forFeature([AclUserTokens], 'acl')],
    controllers: [UserTokensController],
    providers: [UserTokensService], 
})
export class UserTokensModule { }
