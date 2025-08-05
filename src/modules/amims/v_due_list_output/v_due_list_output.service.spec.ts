import { Test, TestingModule } from '@nestjs/testing';
import { VDueListOutputService } from './v_due_list_output.service';

describe('VDueListOutputService', () => {
  let service: VDueListOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VDueListOutputService],
    }).compile();

    service = module.get<VDueListOutputService>(VDueListOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
