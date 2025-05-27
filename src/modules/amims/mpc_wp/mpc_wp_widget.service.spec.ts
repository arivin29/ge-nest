import { Test, TestingModule } from '@nestjs/testing';
import { MpcWpWidgetService } from './mpc_wp_widget.service';
import { DataSource } from 'typeorm';

describe('MpcWpWidgetService', () => {
  let service: MpcWpWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcWpWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcWpWidgetService>(MpcWpWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
