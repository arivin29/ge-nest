import { Test, TestingModule } from '@nestjs/testing';
import { LifeTimeLimitController } from './life_time_limit.controller';
import { LifeTimeLimitService } from './life_time_limit.service';

describe('LifeTimeLimitController', () => {
  let controller: LifeTimeLimitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifeTimeLimitController],
      providers: [
        {
          provide: LifeTimeLimitService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LifeTimeLimitController>(LifeTimeLimitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
