import { Test, TestingModule } from '@nestjs/testing';
import { PurPoItemService } from './pur_po_item.service';

describe('PurPoItemService', () => {
  let service: PurPoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurPoItemService],
    }).compile();

    service = module.get<PurPoItemService>(PurPoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
