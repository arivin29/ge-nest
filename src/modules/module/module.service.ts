import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Module } from './entities/module.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ModuleService extends BaseService<Module> {
  constructor(
    @InjectRepository(Module)
    repo: Repository<Module>,
  ) {
    super(repo);
  }
}
