import { Test, TestingModule } from '@nestjs/testing';
import { PurPoItemWidgetService } from './pur_po_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurPoItemWidgetService', () => {
  let service: PurPoItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurPoItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurPoItemWidgetService>(PurPoItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
