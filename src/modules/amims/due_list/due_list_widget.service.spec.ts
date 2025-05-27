import { Test, TestingModule } from '@nestjs/testing';
import { DueListWidgetService } from './due_list_widget.service';
import { DataSource } from 'typeorm';

describe('DueListWidgetService', () => {
  let service: DueListWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DueListWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<DueListWidgetService>(DueListWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
