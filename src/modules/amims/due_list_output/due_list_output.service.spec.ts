import { Test, TestingModule } from '@nestjs/testing';
import { DueListOutputService } from './due_list_output.service';

describe('DueListOutputService', () => {
  let service: DueListOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DueListOutputService],
    }).compile();

    service = module.get<DueListOutputService>(DueListOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
