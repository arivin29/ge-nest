import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomField } from './entities/custom_field.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class CustomFieldService extends BaseService<CustomField> {
  constructor(
    @InjectRepository(CustomField)
    repo: Repository<CustomField>,
  ) {
    super(repo);
  }
}
