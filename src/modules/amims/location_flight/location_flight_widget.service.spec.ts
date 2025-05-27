import { Test, TestingModule } from '@nestjs/testing';
import { LocationFlightWidgetService } from './location_flight_widget.service';
import { DataSource } from 'typeorm';

describe('LocationFlightWidgetService', () => {
  let service: LocationFlightWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationFlightWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LocationFlightWidgetService>(LocationFlightWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
