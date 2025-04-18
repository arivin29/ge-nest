import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowLogWidgetService } from './workflow_log_widget.service';
import { DataSource } from 'typeorm';

describe('WorkflowLogWidgetService', () => {
  let service: WorkflowLogWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkflowLogWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkflowLogWidgetService>(WorkflowLogWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
