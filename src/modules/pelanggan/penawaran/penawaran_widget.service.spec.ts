import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranWidgetService } from './penawaran_widget.service';
import { DataSource } from 'typeorm';

describe('PenawaranWidgetService', () => {
  let service: PenawaranWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PenawaranWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PenawaranWidgetService>(PenawaranWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
