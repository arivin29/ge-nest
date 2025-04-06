import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTokensService } from './user_tokens.service';
import { UserTokensController } from './user_tokens.controller';
import { UserTokens } from './entities/user_tokens.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTokens])],
  exports: [TypeOrmModule.forFeature([UserTokens])],
  controllers: [UserTokensController],
  providers: [UserTokensService],
})
export class UserTokensModule {}
