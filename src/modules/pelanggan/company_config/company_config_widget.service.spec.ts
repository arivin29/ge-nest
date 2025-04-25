import { Test, TestingModule } from '@nestjs/testing';
import { CompanyConfigWidgetService } from './company_config_widget.service';
import { DataSource } from 'typeorm';

describe('CompanyConfigWidgetService', () => {
  let service: CompanyConfigWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyConfigWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<CompanyConfigWidgetService>(CompanyConfigWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
