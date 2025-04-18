import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowStepWidgetService } from './workflow_step_widget.service';
import { DataSource } from 'typeorm';

describe('WorkflowStepWidgetService', () => {
  let service: WorkflowStepWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkflowStepWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkflowStepWidgetService>(WorkflowStepWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
