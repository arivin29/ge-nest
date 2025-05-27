import { Test, TestingModule } from '@nestjs/testing';
import { LibReferenceService } from './lib_reference.service';

describe('LibReferenceService', () => {
  let service: LibReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibReferenceService],
    }).compile();

    service = module.get<LibReferenceService>(LibReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
