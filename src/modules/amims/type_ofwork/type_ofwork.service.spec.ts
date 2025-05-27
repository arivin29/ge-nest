import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfworkService } from './type_ofwork.service';

describe('TypeOfworkService', () => {
  let service: TypeOfworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfworkService],
    }).compile();

    service = module.get<TypeOfworkService>(TypeOfworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
