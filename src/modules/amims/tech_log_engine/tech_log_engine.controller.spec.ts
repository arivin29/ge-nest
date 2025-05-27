import { Test, TestingModule } from '@nestjs/testing';
import { TechLogEngineController } from './tech_log_engine.controller';
import { TechLogEngineService } from './tech_log_engine.service';

describe('TechLogEngineController', () => {
  let controller: TechLogEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechLogEngineController],
      providers: [
        {
          provide: TechLogEngineService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechLogEngineController>(TechLogEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
