import { Test, TestingModule } from '@nestjs/testing';
import { LocationFlightService } from './location_flight.service';

describe('LocationFlightService', () => {
  let service: LocationFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationFlightService],
    }).compile();

    service = module.get<LocationFlightService>(LocationFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
