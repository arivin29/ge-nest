import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldGroupWidgetService } from './custom_field_group_widget.service';
import { DataSource } from 'typeorm';

describe('CustomFieldGroupWidgetService', () => {
  let service: CustomFieldGroupWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomFieldGroupWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<CustomFieldGroupWidgetService>(CustomFieldGroupWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
