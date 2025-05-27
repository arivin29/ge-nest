import { Test, TestingModule } from '@nestjs/testing';
import { LogUserController } from './log_user.controller';
import { LogUserService } from './log_user.service';

describe('LogUserController', () => {
  let controller: LogUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogUserController],
      providers: [
        {
          provide: LogUserService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LogUserController>(LogUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
