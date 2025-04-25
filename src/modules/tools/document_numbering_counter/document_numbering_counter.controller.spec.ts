import { Test, TestingModule } from '@nestjs/testing';
import { DocumentNumberingCounterController } from './document_numbering_counter.controller';
import { DocumentNumberingCounterService } from './document_numbering_counter.service';

describe('DocumentNumberingCounterController', () => {
  let controller: DocumentNumberingCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentNumberingCounterController],
      providers: [
        {
          provide: DocumentNumberingCounterService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DocumentNumberingCounterController>(DocumentNumberingCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
