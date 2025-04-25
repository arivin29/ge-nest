import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteServiceWidgetService } from './contract_site_service_widget.service';
import { DataSource } from 'typeorm';

describe('ContractSiteServiceWidgetService', () => {
  let service: ContractSiteServiceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractSiteServiceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ContractSiteServiceWidgetService>(ContractSiteServiceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
