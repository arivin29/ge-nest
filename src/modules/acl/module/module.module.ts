import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { AclModule } from 'src/entities/acl';
 
@Module({
  imports: [TypeOrmModule.forFeature([AclModule],'acl')],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
