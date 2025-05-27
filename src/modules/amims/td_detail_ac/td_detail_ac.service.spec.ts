import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailAcService } from './td_detail_ac.service';

describe('TdDetailAcService', () => {
  let service: TdDetailAcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdDetailAcService],
    }).compile();

    service = module.get<TdDetailAcService>(TdDetailAcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
