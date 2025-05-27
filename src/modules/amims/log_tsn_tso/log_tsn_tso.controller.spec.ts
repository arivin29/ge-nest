import { Test, TestingModule } from '@nestjs/testing';
import { LogTsnTsoController } from './log_tsn_tso.controller';
import { LogTsnTsoService } from './log_tsn_tso.service';

describe('LogTsnTsoController', () => {
  let controller: LogTsnTsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogTsnTsoController],
      providers: [
        {
          provide: LogTsnTsoService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LogTsnTsoController>(LogTsnTsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
