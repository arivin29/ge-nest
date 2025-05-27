import { Test, TestingModule } from '@nestjs/testing';
import { PartCategoryWidgetService } from './part_category_widget.service';
import { DataSource } from 'typeorm';

describe('PartCategoryWidgetService', () => {
  let service: PartCategoryWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartCategoryWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartCategoryWidgetService>(PartCategoryWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
