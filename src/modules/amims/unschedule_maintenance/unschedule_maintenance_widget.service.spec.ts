import { Test, TestingModule } from '@nestjs/testing';
import { UnscheduleMaintenanceWidgetService } from './unschedule_maintenance_widget.service';
import { DataSource } from 'typeorm';

describe('UnscheduleMaintenanceWidgetService', () => {
  let service: UnscheduleMaintenanceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnscheduleMaintenanceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<UnscheduleMaintenanceWidgetService>(UnscheduleMaintenanceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
