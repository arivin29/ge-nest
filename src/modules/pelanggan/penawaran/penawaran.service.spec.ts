import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranService } from './penawaran.service';

describe('PenawaranService', () => {
  let service: PenawaranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenawaranService],
    }).compile();

    service = module.get<PenawaranService>(PenawaranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
