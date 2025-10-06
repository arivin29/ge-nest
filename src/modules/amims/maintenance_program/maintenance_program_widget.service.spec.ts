import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramWidgetService } from './maintenance_program_widget.service';
import { DataSource } from 'typeorm';

describe('MaintenanceProgramWidgetService', () => {
  let service: MaintenanceProgramWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaintenanceProgramWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MaintenanceProgramWidgetService>(MaintenanceProgramWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
