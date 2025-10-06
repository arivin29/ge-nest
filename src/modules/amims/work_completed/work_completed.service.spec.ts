import { Test, TestingModule } from '@nestjs/testing';
import { WorkCompletedService } from './work_completed.service';

describe('WorkCompletedService', () => {
  let service: WorkCompletedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkCompletedService],
    }).compile();

    service = module.get<WorkCompletedService>(WorkCompletedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
