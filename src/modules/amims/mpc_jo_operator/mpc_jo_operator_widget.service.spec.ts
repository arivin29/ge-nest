import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoOperatorWidgetService } from './mpc_jo_operator_widget.service';
import { DataSource } from 'typeorm';

describe('MpcJoOperatorWidgetService', () => {
  let service: MpcJoOperatorWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpcJoOperatorWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpcJoOperatorWidgetService>(MpcJoOperatorWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
