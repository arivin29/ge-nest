import { Test, TestingModule } from '@nestjs/testing';
import { LifeTimeLimitService } from './life_time_limit.service';

describe('LifeTimeLimitService', () => {
  let service: LifeTimeLimitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeTimeLimitService],
    }).compile();

    service = module.get<LifeTimeLimitService>(LifeTimeLimitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
