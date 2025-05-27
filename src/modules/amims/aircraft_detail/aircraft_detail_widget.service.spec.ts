import { Test, TestingModule } from '@nestjs/testing';
import { AircraftDetailWidgetService } from './aircraft_detail_widget.service';
import { DataSource } from 'typeorm';

describe('AircraftDetailWidgetService', () => {
  let service: AircraftDetailWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AircraftDetailWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<AircraftDetailWidgetService>(AircraftDetailWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
