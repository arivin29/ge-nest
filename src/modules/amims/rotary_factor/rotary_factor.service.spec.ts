import { Test, TestingModule } from '@nestjs/testing';
import { RotaryFactorService } from './rotary_factor.service';

describe('RotaryFactorService', () => {
  let service: RotaryFactorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RotaryFactorService],
    }).compile();

    service = module.get<RotaryFactorService>(RotaryFactorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
