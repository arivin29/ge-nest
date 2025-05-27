import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiIdentifyWidgetService } from './engineer_rti_identify_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerRtiIdentifyWidgetService', () => {
  let service: EngineerRtiIdentifyWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerRtiIdentifyWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerRtiIdentifyWidgetService>(EngineerRtiIdentifyWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
