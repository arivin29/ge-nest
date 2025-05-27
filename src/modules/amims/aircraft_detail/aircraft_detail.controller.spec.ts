import { Test, TestingModule } from '@nestjs/testing';
import { AircraftDetailController } from './aircraft_detail.controller';
import { AircraftDetailService } from './aircraft_detail.service';

describe('AircraftDetailController', () => {
  let controller: AircraftDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AircraftDetailController],
      providers: [
        {
          provide: AircraftDetailService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AircraftDetailController>(AircraftDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
