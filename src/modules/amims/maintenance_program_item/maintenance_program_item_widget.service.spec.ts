import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramItemWidgetService } from './maintenance_program_item_widget.service';
import { DataSource } from 'typeorm';

describe('MaintenanceProgramItemWidgetService', () => {
  let service: MaintenanceProgramItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaintenanceProgramItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MaintenanceProgramItemWidgetService>(MaintenanceProgramItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
