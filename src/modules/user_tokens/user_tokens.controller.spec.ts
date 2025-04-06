import { Test, TestingModule } from '@nestjs/testing';
import { UserTokensController } from './user_tokens.controller';
import { UserTokensService } from './user_tokens.service';

describe('UserTokensController', () => {
  let controller: UserTokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTokensController],
      providers: [
        {
          provide: UserTokensService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserTokensController>(UserTokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
