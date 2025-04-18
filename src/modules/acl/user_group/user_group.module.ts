import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupService } from './user_group.service';
import { UserGroupController } from './user_group.controller';
import { AclUserGroup } from 'src/entities/acl';
 
@Module({
  imports: [TypeOrmModule.forFeature([AclUserGroup],'acl')],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
