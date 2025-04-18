import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldGroupService } from './custom_field_group.service';

describe('CustomFieldGroupService', () => {
  let service: CustomFieldGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomFieldGroupService],
    }).compile();

    service = module.get<CustomFieldGroupService>(CustomFieldGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
