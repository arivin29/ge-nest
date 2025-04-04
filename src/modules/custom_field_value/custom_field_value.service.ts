import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomFieldValue } from './entities/custom_field_value.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class CustomFieldValueService extends BaseService<CustomFieldValue> {
  constructor(
    @InjectRepository(CustomFieldValue)
    repo: Repository<CustomFieldValue>,
  ) {
    super(repo);
  }
}
