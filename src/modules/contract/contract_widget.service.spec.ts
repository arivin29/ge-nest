import { Test, TestingModule } from '@nestjs/testing';
import { ContractWidgetService } from './contract_widget.service';
import { DataSource } from 'typeorm';

describe('ContractWidgetService', () => {
  let service: ContractWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ContractWidgetService>(ContractWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
