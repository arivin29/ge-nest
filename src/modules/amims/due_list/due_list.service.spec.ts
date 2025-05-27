import { Test, TestingModule } from '@nestjs/testing';
import { DueListService } from './due_list.service';

describe('DueListService', () => {
  let service: DueListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DueListService],
    }).compile();

    service = module.get<DueListService>(DueListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
