import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnItemWidgetService } from './pur_return_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurReturnItemWidgetService', () => {
  let service: PurReturnItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurReturnItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurReturnItemWidgetService>(PurReturnItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
