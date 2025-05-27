import { Test, TestingModule } from '@nestjs/testing';
import { TdService } from './td.service';

describe('TdService', () => {
  let service: TdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdService],
    }).compile();

    service = module.get<TdService>(TdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
