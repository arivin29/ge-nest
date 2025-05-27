import { Test, TestingModule } from '@nestjs/testing';
import { PartAlternativeService } from './part_alternative.service';

describe('PartAlternativeService', () => {
  let service: PartAlternativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartAlternativeService],
    }).compile();

    service = module.get<PartAlternativeService>(PartAlternativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
