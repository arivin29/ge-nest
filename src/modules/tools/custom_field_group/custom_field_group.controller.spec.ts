import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldGroupController } from './custom_field_group.controller';
import { CustomFieldGroupService } from './custom_field_group.service';

describe('CustomFieldGroupController', () => {
  let controller: CustomFieldGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFieldGroupController],
      providers: [
        {
          provide: CustomFieldGroupService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CustomFieldGroupController>(CustomFieldGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
