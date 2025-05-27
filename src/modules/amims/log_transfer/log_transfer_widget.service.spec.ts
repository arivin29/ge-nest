import { Test, TestingModule } from '@nestjs/testing';
import { LogTransferWidgetService } from './log_transfer_widget.service';
import { DataSource } from 'typeorm';

describe('LogTransferWidgetService', () => {
  let service: LogTransferWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogTransferWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LogTransferWidgetService>(LogTransferWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
