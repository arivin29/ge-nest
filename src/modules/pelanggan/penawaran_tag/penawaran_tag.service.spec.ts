import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranTagService } from './penawaran_tag.service';

describe('PenawaranTagService', () => {
  let service: PenawaranTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenawaranTagService],
    }).compile();

    service = module.get<PenawaranTagService>(PenawaranTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
