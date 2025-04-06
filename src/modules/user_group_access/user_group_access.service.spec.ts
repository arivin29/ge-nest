import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupAccessService } from './user_group_access.service';

describe('UserGroupAccessService', () => {
  let service: UserGroupAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupAccessService],
    }).compile();

    service = module.get<UserGroupAccessService>(UserGroupAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
