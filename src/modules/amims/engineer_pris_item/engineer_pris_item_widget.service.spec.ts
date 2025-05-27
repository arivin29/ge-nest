import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisItemWidgetService } from './engineer_pris_item_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPrisItemWidgetService', () => {
  let service: EngineerPrisItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPrisItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPrisItemWidgetService>(EngineerPrisItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
