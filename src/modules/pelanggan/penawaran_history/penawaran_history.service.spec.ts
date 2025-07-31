import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranHistoryService } from './penawaran_history.service';

describe('PenawaranHistoryService', () => {
  let service: PenawaranHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenawaranHistoryService],
    }).compile();

    service = module.get<PenawaranHistoryService>(PenawaranHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
