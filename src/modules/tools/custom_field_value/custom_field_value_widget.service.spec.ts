import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldValueWidgetService } from './custom_field_value_widget.service';
import { DataSource } from 'typeorm';

describe('CustomFieldValueWidgetService', () => {
  let service: CustomFieldValueWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomFieldValueWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<CustomFieldValueWidgetService>(CustomFieldValueWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
