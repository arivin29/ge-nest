import { Test, TestingModule } from '@nestjs/testing';
import { WpJoWidgetService } from './wp_jo_widget.service';
import { DataSource } from 'typeorm';

describe('WpJoWidgetService', () => {
  let service: WpJoWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WpJoWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WpJoWidgetService>(WpJoWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
