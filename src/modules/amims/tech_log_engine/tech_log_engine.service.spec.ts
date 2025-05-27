import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineService } from './tech_log_engine.service';

describe('TechLogEngineService', () => {
  let service: TechLogEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechLogEngineService],
    }).compile();

    service = module.get<TechLogEngineService>(TechLogEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
