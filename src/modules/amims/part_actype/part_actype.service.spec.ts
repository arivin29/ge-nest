import { Test, TestingModule } from '@nestjs/testing';
import { PartActypeService } from './part_actype.service';

describe('PartActypeService', () => {
  let service: PartActypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartActypeService],
    }).compile();

    service = module.get<PartActypeService>(PartActypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
