import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsCustomField } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class CustomFieldService extends BaseService<ToolsCustomField> {
  constructor(
    @InjectRepository(ToolsCustomField,'tools')
    repo: Repository<ToolsCustomField>,
  ) {
    super(repo);
  }
}
