import { Test, TestingModule } from '@nestjs/testing';
import { LibFormIssuedService } from './lib_form_issued.service';

describe('LibFormIssuedService', () => {
  let service: LibFormIssuedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibFormIssuedService],
    }).compile();

    service = module.get<LibFormIssuedService>(LibFormIssuedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
