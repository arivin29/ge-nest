import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnItemWidgetService } from './engineer_pris_return_item_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPrisReturnItemWidgetService', () => {
  let service: EngineerPrisReturnItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPrisReturnItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPrisReturnItemWidgetService>(EngineerPrisReturnItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
