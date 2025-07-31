import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranRevisiLogService } from './penawaran_revisi_log.service';

describe('PenawaranRevisiLogService', () => {
  let service: PenawaranRevisiLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenawaranRevisiLogService],
    }).compile();

    service = module.get<PenawaranRevisiLogService>(PenawaranRevisiLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
