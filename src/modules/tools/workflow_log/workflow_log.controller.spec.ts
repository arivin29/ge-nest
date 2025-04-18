import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowLogController } from './workflow_log.controller';
import { WorkflowLogService } from './workflow_log.service';

describe('WorkflowLogController', () => {
  let controller: WorkflowLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowLogController],
      providers: [
        {
          provide: WorkflowLogService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkflowLogController>(WorkflowLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
