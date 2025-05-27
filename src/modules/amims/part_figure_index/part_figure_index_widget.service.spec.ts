import { Test, TestingModule } from '@nestjs/testing';
import { PartFigureIndexWidgetService } from './part_figure_index_widget.service';
import { DataSource } from 'typeorm';

describe('PartFigureIndexWidgetService', () => {
  let service: PartFigureIndexWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartFigureIndexWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartFigureIndexWidgetService>(PartFigureIndexWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
