import { Test, TestingModule } from '@nestjs/testing';
import { AircraftWidgetService } from './aircraft_widget.service';
import { DataSource } from 'typeorm';

describe('AircraftWidgetService', () => {
  let service: AircraftWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AircraftWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<AircraftWidgetService>(AircraftWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
