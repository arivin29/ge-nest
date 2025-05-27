import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnWidgetService } from './pur_return_widget.service';
import { DataSource } from 'typeorm';

describe('PurReturnWidgetService', () => {
  let service: PurReturnWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurReturnWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurReturnWidgetService>(PurReturnWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
