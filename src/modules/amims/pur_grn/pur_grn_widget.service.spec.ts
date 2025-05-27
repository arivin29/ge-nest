import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnWidgetService } from './pur_grn_widget.service';
import { DataSource } from 'typeorm';

describe('PurGrnWidgetService', () => {
  let service: PurGrnWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurGrnWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurGrnWidgetService>(PurGrnWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
