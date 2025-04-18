import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldValueController } from './custom_field_value.controller';
import { CustomFieldValueService } from './custom_field_value.service';

describe('CustomFieldValueController', () => {
  let controller: CustomFieldValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFieldValueController],
      providers: [
        {
          provide: CustomFieldValueService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CustomFieldValueController>(CustomFieldValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
