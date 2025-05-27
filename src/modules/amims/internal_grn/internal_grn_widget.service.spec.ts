import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnWidgetService } from './internal_grn_widget.service';
import { DataSource } from 'typeorm';

describe('InternalGrnWidgetService', () => {
  let service: InternalGrnWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InternalGrnWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<InternalGrnWidgetService>(InternalGrnWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
