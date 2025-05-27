import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisService } from './engineer_pris.service';

describe('EngineerPrisService', () => {
  let service: EngineerPrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPrisService],
    }).compile();

    service = module.get<EngineerPrisService>(EngineerPrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
