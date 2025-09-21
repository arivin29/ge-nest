import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountWidgetService } from './bank_account_widget.service';
import { DataSource } from 'typeorm';

describe('BankAccountWidgetService', () => {
  let service: BankAccountWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BankAccountWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<BankAccountWidgetService>(BankAccountWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
