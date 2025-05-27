import { Test, TestingModule } from '@nestjs/testing';
import { LogTsnTsoService } from './log_tsn_tso.service';

describe('LogTsnTsoService', () => {
  let service: LogTsnTsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogTsnTsoService],
    }).compile();

    service = module.get<LogTsnTsoService>(LogTsnTsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
