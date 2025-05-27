import { Test, TestingModule } from '@nestjs/testing';
import { LogProcessController } from './log_process.controller';
import { LogProcessService } from './log_process.service';

describe('LogProcessController', () => {
  let controller: LogProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogProcessController],
      providers: [
        {
          provide: LogProcessService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LogProcessController>(LogProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
