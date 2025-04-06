import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { Module as  ModuleEnt } from './entities/module.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ModuleEnt])],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
