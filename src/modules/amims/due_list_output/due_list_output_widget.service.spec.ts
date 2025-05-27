import { Test, TestingModule } from '@nestjs/testing';
import { DueListOutputWidgetService } from './due_list_output_widget.service';
import { DataSource } from 'typeorm';

describe('DueListOutputWidgetService', () => {
  let service: DueListOutputWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DueListOutputWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<DueListOutputWidgetService>(DueListOutputWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
