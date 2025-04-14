import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowLogService } from './workflow_log.service';

describe('WorkflowLogService', () => {
  let service: WorkflowLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkflowLogService],
    }).compile();

    service = module.get<WorkflowLogService>(WorkflowLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
