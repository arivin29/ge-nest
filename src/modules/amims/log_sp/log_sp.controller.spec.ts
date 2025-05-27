import { Test, TestingModule } from '@nestjs/testing';
import { LogSpController } from './log_sp.controller';
import { LogSpService } from './log_sp.service';

describe('LogSpController', () => {
  let controller: LogSpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogSpController],
      providers: [
        {
          provide: LogSpService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LogSpController>(LogSpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
