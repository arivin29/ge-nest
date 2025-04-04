import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class InvoiceService extends BaseService<Invoice> {
  constructor(
    @InjectRepository(Invoice)
    repo: Repository<Invoice>,
  ) {
    super(repo);
  }
}
