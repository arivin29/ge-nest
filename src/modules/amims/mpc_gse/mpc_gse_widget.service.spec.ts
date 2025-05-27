import { Test, TestingModule } from '@nestjs/testing';
import { MpcGseWidgetService } from './mpc_gse_widget.service';
import { DataSource } from 'typeorm';

describe('MpcGseWidgetService', () => {
  let service: MpcGseWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcGseWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcGseWidgetService>(MpcGseWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
