import { Test, TestingModule } from '@nestjs/testing';
import { DocumentNumberingController } from './document_numbering.controller';
import { DocumentNumberingService } from './document_numbering.service';

describe('DocumentNumberingController', () => {
  let controller: DocumentNumberingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentNumberingController],
      providers: [
        {
          provide: DocumentNumberingService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DocumentNumberingController>(DocumentNumberingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
