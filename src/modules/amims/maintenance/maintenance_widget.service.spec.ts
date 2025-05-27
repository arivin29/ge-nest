import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceWidgetService } from './maintenance_widget.service';
import { DataSource } from 'typeorm';

describe('MaintenanceWidgetService', () => {
  let service: MaintenanceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaintenanceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MaintenanceWidgetService>(MaintenanceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
