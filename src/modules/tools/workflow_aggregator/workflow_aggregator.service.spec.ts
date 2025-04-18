import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowAggregatorService } from './workflow_aggregator.service';

describe('WorkflowAggregatorService', () => {
  let service: WorkflowAggregatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkflowAggregatorService],
    }).compile();

    service = module.get<WorkflowAggregatorService>(WorkflowAggregatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
