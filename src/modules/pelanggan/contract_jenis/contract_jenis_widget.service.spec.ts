import { Test, TestingModule } from '@nestjs/testing';
import { ContractJenisWidgetService } from './contract_jenis_widget.service';
import { DataSource } from 'typeorm';

describe('ContractJenisWidgetService', () => {
  let service: ContractJenisWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractJenisWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ContractJenisWidgetService>(ContractJenisWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
