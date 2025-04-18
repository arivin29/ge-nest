import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowWidgetService } from './workflow_widget.service';
import { DataSource } from 'typeorm';

describe('WorkflowWidgetService', () => {
  let service: WorkflowWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkflowWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WorkflowWidgetService>(WorkflowWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
