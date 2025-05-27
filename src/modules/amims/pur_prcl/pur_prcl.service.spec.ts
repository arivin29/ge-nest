import { Test, TestingModule } from '@nestjs/testing';
import { PurPrclService } from './pur_prcl.service';

describe('PurPrclService', () => {
  let service: PurPrclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurPrclService],
    }).compile();

    service = module.get<PurPrclService>(PurPrclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
