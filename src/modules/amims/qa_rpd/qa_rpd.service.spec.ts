import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdService } from './qa_rpd.service';

describe('QaRpdService', () => {
  let service: QaRpdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaRpdService],
    }).compile();

    service = module.get<QaRpdService>(QaRpdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
