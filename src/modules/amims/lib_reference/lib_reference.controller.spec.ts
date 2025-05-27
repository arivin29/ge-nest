import { Test, TestingModule } from '@nestjs/testing';
import { LibReferenceController } from './lib_reference.controller';
import { LibReferenceService } from './lib_reference.service';

describe('LibReferenceController', () => {
  let controller: LibReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibReferenceController],
      providers: [
        {
          provide: LibReferenceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LibReferenceController>(LibReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
