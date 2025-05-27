import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailService } from './td_detail.service';

describe('TdDetailService', () => {
  let service: TdDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdDetailService],
    }).compile();

    service = module.get<TdDetailService>(TdDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
