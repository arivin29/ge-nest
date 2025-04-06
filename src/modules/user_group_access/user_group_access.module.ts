import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupAccessService } from './user_group_access.service';
import { UserGroupAccessController } from './user_group_access.controller';
import { UserGroupAccess } from './entities/user_group_access.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroupAccess])],
  controllers: [UserGroupAccessController],
  providers: [UserGroupAccessService],
})
export class UserGroupAccessModule {}
