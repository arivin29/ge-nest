import { Test, TestingModule } from '@nestjs/testing';
import { PurPoWidgetService } from './pur_po_widget.service';
import { DataSource } from 'typeorm';

describe('PurPoWidgetService', () => {
  let service: PurPoWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurPoWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurPoWidgetService>(PurPoWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
