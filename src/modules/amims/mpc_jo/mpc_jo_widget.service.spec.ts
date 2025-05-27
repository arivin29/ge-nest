import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoWidgetService } from './mpc_jo_widget.service';
import { DataSource } from 'typeorm';

describe('MpcJoWidgetService', () => {
  let service: MpcJoWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcJoWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcJoWidgetService>(MpcJoWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
