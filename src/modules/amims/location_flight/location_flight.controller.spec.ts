import { Test, TestingModule } from '@nestjs/testing';
import { LocationFlightController } from './location_flight.controller';
import { LocationFlightService } from './location_flight.service';

describe('LocationFlightController', () => {
  let controller: LocationFlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationFlightController],
      providers: [
        {
          provide: LocationFlightService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LocationFlightController>(LocationFlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
