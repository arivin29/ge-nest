import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiService } from './engineer_rti.service';

describe('EngineerRtiService', () => {
  let service: EngineerRtiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerRtiService],
    }).compile();

    service = module.get<EngineerRtiService>(EngineerRtiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
