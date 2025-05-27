import { Test, TestingModule } from '@nestjs/testing';
import { RotaryFactorWidgetService } from './rotary_factor_widget.service';
import { DataSource } from 'typeorm';

describe('RotaryFactorWidgetService', () => {
  let service: RotaryFactorWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RotaryFactorWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<RotaryFactorWidgetService>(RotaryFactorWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
