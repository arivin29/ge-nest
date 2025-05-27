import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnItemWidgetService } from './internal_grn_item_widget.service';
import { DataSource } from 'typeorm';

describe('InternalGrnItemWidgetService', () => {
  let service: InternalGrnItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InternalGrnItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<InternalGrnItemWidgetService>(InternalGrnItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
