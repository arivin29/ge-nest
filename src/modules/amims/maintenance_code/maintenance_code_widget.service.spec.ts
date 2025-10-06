import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeWidgetService } from './maintenance_code_widget.service';
import { DataSource } from 'typeorm';

describe('MaintenanceCodeWidgetService', () => {
  let service: MaintenanceCodeWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaintenanceCodeWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MaintenanceCodeWidgetService>(MaintenanceCodeWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
