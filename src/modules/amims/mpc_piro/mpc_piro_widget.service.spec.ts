import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroWidgetService } from './mpc_piro_widget.service';
import { DataSource } from 'typeorm';

describe('MpcPiroWidgetService', () => {
  let service: MpcPiroWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcPiroWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcPiroWidgetService>(MpcPiroWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
