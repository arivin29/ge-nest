import { Test, TestingModule } from '@nestjs/testing';
import { VDueListOutputWidgetService } from './v_due_list_output_widget.service';
import { DataSource } from 'typeorm';

describe('VDueListOutputWidgetService', () => {
  let service: VDueListOutputWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VDueListOutputWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<VDueListOutputWidgetService>(VDueListOutputWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
