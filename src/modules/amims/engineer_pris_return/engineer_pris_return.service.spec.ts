import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnService } from './engineer_pris_return.service';

describe('EngineerPrisReturnService', () => {
  let service: EngineerPrisReturnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPrisReturnService],
    }).compile();

    service = module.get<EngineerPrisReturnService>(EngineerPrisReturnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
