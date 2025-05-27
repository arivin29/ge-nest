import { Test, TestingModule } from '@nestjs/testing';
import { PurPoService } from './pur_po.service';

describe('PurPoService', () => {
  let service: PurPoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurPoService],
    }).compile();

    service = module.get<PurPoService>(PurPoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
