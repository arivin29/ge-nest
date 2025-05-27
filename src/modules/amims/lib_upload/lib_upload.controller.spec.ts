import { Test, TestingModule } from '@nestjs/testing';
import { LibUploadController } from './lib_upload.controller';
import { LibUploadService } from './lib_upload.service';

describe('LibUploadController', () => {
  let controller: LibUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibUploadController],
      providers: [
        {
          provide: LibUploadService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LibUploadController>(LibUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
