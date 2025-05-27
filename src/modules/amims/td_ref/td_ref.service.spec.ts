import { Test, TestingModule } from '@nestjs/testing';
import { TdRefService } from './td_ref.service';

describe('TdRefService', () => {
  let service: TdRefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdRefService],
    }).compile();

    service = module.get<TdRefService>(TdRefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
