import { Test, TestingModule } from '@nestjs/testing';
import { PurPrService } from './pur_pr.service';

describe('PurPrService', () => {
  let service: PurPrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurPrService],
    }).compile();

    service = module.get<PurPrService>(PurPrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
