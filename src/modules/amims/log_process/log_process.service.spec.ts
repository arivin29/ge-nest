import { Test, TestingModule } from '@nestjs/testing';
import { LogProcessService } from './log_process.service';

describe('LogProcessService', () => {
  let service: LogProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogProcessService],
    }).compile();

    service = module.get<LogProcessService>(LogProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
