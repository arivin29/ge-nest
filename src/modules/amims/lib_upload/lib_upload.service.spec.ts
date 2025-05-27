import { Test, TestingModule } from '@nestjs/testing';
import { LibUploadService } from './lib_upload.service';

describe('LibUploadService', () => {
  let service: LibUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibUploadService],
    }).compile();

    service = module.get<LibUploadService>(LibUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
