import { Test, TestingModule } from '@nestjs/testing';
import { ContactClientUseService } from './contact_client_use.service';

describe('ContactClientUseService', () => {
  let service: ContactClientUseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactClientUseService],
    }).compile();

    service = module.get<ContactClientUseService>(ContactClientUseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
