import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnService } from './pur_return.service';

describe('PurReturnService', () => {
  let service: PurReturnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurReturnService],
    }).compile();

    service = module.get<PurReturnService>(PurReturnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
