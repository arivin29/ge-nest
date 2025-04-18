import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowAggregatorController } from './workflow_aggregator.controller';
import { WorkflowAggregatorService } from './workflow_aggregator.service';

describe('WorkflowAggregatorController', () => {
  let controller: WorkflowAggregatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowAggregatorController],
      providers: [
        {
          provide: WorkflowAggregatorService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkflowAggregatorController>(WorkflowAggregatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
