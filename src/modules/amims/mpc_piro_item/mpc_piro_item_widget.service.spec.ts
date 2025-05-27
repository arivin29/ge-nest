import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroItemWidgetService } from './mpc_piro_item_widget.service';
import { DataSource } from 'typeorm';

describe('MpcPiroItemWidgetService', () => {
  let service: MpcPiroItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcPiroItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcPiroItemWidgetService>(MpcPiroItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
