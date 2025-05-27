import { Test, TestingModule } from '@nestjs/testing';
import { TechLogService } from './tech_log.service';

describe('TechLogService', () => {
  let service: TechLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechLogService],
    }).compile();

    service = module.get<TechLogService>(TechLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
