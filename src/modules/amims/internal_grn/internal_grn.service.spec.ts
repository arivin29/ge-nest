import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnService } from './internal_grn.service';

describe('InternalGrnService', () => {
  let service: InternalGrnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalGrnService],
    }).compile();

    service = module.get<InternalGrnService>(InternalGrnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
