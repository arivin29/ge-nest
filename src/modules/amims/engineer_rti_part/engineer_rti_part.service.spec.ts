import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiPartService } from './engineer_rti_part.service';

describe('EngineerRtiPartService', () => {
  let service: EngineerRtiPartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerRtiPartService],
    }).compile();

    service = module.get<EngineerRtiPartService>(EngineerRtiPartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
