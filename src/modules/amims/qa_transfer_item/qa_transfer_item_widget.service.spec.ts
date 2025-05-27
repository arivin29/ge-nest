import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferItemWidgetService } from './qa_transfer_item_widget.service';
import { DataSource } from 'typeorm';

describe('QaTransferItemWidgetService', () => {
  let service: QaTransferItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QaTransferItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<QaTransferItemWidgetService>(QaTransferItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
