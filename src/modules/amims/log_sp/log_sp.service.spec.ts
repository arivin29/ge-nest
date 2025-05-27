import { Test, TestingModule } from '@nestjs/testing';
import { LogSpService } from './log_sp.service';

describe('LogSpService', () => {
  let service: LogSpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogSpService],
    }).compile();

    service = module.get<LogSpService>(LogSpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
