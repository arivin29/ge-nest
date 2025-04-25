import { Test, TestingModule } from '@nestjs/testing';
import { DocumentNumberingCounterService } from './document_numbering_counter.service';

describe('DocumentNumberingCounterService', () => {
  let service: DocumentNumberingCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentNumberingCounterService],
    }).compile();

    service = module.get<DocumentNumberingCounterService>(DocumentNumberingCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
