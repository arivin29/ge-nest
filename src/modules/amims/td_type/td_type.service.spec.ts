import { Test, TestingModule } from '@nestjs/testing';
import { TdTypeService } from './td_type.service';

describe('TdTypeService', () => {
  let service: TdTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdTypeService],
    }).compile();

    service = module.get<TdTypeService>(TdTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
