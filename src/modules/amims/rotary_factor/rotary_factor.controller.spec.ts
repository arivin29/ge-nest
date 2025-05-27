import { Test, TestingModule } from '@nestjs/testing';
import { RotaryFactorController } from './rotary_factor.controller';
import { RotaryFactorService } from './rotary_factor.service';

describe('RotaryFactorController', () => {
  let controller: RotaryFactorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotaryFactorController],
      providers: [
        {
          provide: RotaryFactorService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<RotaryFactorController>(RotaryFactorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
