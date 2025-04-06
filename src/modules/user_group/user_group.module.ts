import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupService } from './user_group.service';
import { UserGroupController } from './user_group.controller';
import { UserGroup } from './entities/user_group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroup])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
