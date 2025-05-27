import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrService } from './engineer_pmtr.service';

describe('EngineerPmtrService', () => {
  let service: EngineerPmtrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPmtrService],
    }).compile();

    service = module.get<EngineerPmtrService>(EngineerPmtrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
