import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineCheckController } from './tech_log_engine_check.controller';
import { TechLogEngineCheckService } from './tech_log_engine_check.service';

describe('TechLogEngineCheckController', () => {
  let controller: TechLogEngineCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechLogEngineCheckController],
      providers: [
        {
          provide: TechLogEngineCheckService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechLogEngineCheckController>(TechLogEngineCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
