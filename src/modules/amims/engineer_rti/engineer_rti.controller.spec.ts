import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiController } from './engineer_rti.controller';
import { EngineerRtiService } from './engineer_rti.service';

describe('EngineerRtiController', () => {
  let controller: EngineerRtiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerRtiController],
      providers: [
        {
          provide: EngineerRtiService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerRtiController>(EngineerRtiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
