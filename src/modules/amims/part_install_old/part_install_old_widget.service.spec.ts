import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallOldWidgetService } from './part_install_old_widget.service';
import { DataSource } from 'typeorm';

describe('PartInstallOldWidgetService', () => {
  let service: PartInstallOldWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartInstallOldWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartInstallOldWidgetService>(PartInstallOldWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
