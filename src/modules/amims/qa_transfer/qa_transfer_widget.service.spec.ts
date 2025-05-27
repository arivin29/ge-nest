import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferWidgetService } from './qa_transfer_widget.service';
import { DataSource } from 'typeorm';

describe('QaTransferWidgetService', () => {
  let service: QaTransferWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QaTransferWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<QaTransferWidgetService>(QaTransferWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
