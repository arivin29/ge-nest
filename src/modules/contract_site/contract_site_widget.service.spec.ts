import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteWidgetService } from './contract_site_widget.service';
import { DataSource } from 'typeorm';

describe('ContractSiteWidgetService', () => {
  let service: ContractSiteWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractSiteWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ContractSiteWidgetService>(ContractSiteWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
