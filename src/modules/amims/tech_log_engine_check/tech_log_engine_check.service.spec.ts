import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineCheckService } from './tech_log_engine_check.service';

describe('TechLogEngineCheckService', () => {
  let service: TechLogEngineCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechLogEngineCheckService],
    }).compile();

    service = module.get<TechLogEngineCheckService>(TechLogEngineCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
