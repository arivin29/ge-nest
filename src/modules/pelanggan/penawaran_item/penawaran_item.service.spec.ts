import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranItemService } from './penawaran_item.service';

describe('PenawaranItemService', () => {
  let service: PenawaranItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenawaranItemService],
    }).compile();

    service = module.get<PenawaranItemService>(PenawaranItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
