import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupAccessController } from './user_group_access.controller';
import { UserGroupAccessService } from './user_group_access.service';

describe('UserGroupAccessController', () => {
  let controller: UserGroupAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGroupAccessController],
      providers: [
        {
          provide: UserGroupAccessService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserGroupAccessController>(UserGroupAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
