import { Test, TestingModule } from '@nestjs/testing';
import { TeknisiWidgetService } from './teknisi_widget.service';
import { DataSource } from 'typeorm';

describe('TeknisiWidgetService', () => {
  let service: TeknisiWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeknisiWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TeknisiWidgetService>(TeknisiWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
