import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallWidgetService } from './part_install_widget.service';
import { DataSource } from 'typeorm';

describe('PartInstallWidgetService', () => {
  let service: PartInstallWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartInstallWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartInstallWidgetService>(PartInstallWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
