import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroItemService } from './mpc_piro_item.service';

describe('MpcPiroItemService', () => {
  let service: MpcPiroItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcPiroItemService],
    }).compile();

    service = module.get<MpcPiroItemService>(MpcPiroItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
