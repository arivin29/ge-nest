import { Test, TestingModule } from '@nestjs/testing';
import { MpcSelfMaintenanceWidgetService } from './mpc_self_maintenance_widget.service';
import { DataSource } from 'typeorm';

describe('MpcSelfMaintenanceWidgetService', () => {
  let service: MpcSelfMaintenanceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcSelfMaintenanceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcSelfMaintenanceWidgetService>(MpcSelfMaintenanceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
