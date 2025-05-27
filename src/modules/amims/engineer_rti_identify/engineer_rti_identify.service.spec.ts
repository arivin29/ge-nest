import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiIdentifyService } from './engineer_rti_identify.service';

describe('EngineerRtiIdentifyService', () => {
  let service: EngineerRtiIdentifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerRtiIdentifyService],
    }).compile();

    service = module.get<EngineerRtiIdentifyService>(EngineerRtiIdentifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
