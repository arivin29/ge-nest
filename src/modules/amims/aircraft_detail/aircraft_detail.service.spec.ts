import { Test, TestingModule } from '@nestjs/testing';
import { AircraftDetailService } from './aircraft_detail.service';

describe('AircraftDetailService', () => {
  let service: AircraftDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AircraftDetailService],
    }).compile();

    service = module.get<AircraftDetailService>(AircraftDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
