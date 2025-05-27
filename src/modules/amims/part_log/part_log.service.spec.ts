import { Test, TestingModule } from '@nestjs/testing';
import { PartLogService } from './part_log.service';

describe('PartLogService', () => {
  let service: PartLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartLogService],
    }).compile();

    service = module.get<PartLogService>(PartLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
