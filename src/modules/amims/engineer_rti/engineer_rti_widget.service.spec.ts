import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiWidgetService } from './engineer_rti_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerRtiWidgetService', () => {
  let service: EngineerRtiWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerRtiWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerRtiWidgetService>(EngineerRtiWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
