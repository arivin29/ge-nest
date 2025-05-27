import { Test, TestingModule } from '@nestjs/testing';
import { PartLogWidgetService } from './part_log_widget.service';
import { DataSource } from 'typeorm';

describe('PartLogWidgetService', () => {
  let service: PartLogWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartLogWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartLogWidgetService>(PartLogWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
