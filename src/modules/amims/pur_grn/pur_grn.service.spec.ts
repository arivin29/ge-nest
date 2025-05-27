import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnService } from './pur_grn.service';

describe('PurGrnService', () => {
  let service: PurGrnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurGrnService],
    }).compile();

    service = module.get<PurGrnService>(PurGrnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
