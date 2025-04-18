import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldController } from './custom_field.controller';
import { CustomFieldService } from './custom_field.service';

describe('CustomFieldController', () => {
  let controller: CustomFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFieldController],
      providers: [
        {
          provide: CustomFieldService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CustomFieldController>(CustomFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
