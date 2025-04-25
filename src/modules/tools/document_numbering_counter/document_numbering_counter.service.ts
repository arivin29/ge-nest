import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsDocumentNumberingCounter } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class DocumentNumberingCounterService extends BaseService<ToolsDocumentNumberingCounter> {
  constructor(
    @InjectRepository(ToolsDocumentNumberingCounter,'tools')
    repo: Repository<ToolsDocumentNumberingCounter>,
  ) {
    super(repo);
  }
}
