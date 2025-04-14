import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowStepController } from './workflow_step.controller';
import { WorkflowStepService } from './workflow_step.service';

describe('WorkflowStepController', () => {
  let controller: WorkflowStepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowStepController],
      providers: [
        {
          provide: WorkflowStepService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkflowStepController>(WorkflowStepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
