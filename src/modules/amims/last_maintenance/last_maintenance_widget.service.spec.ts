import { Test, TestingModule } from '@nestjs/testing';
import { LastMaintenanceWidgetService } from './last_maintenance_widget.service';
import { DataSource } from 'typeorm';

describe('LastMaintenanceWidgetService', () => {
  let service: LastMaintenanceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LastMaintenanceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LastMaintenanceWidgetService>(LastMaintenanceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
