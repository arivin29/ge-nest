import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiPartController } from './engineer_rti_part.controller';
import { EngineerRtiPartService } from './engineer_rti_part.service';

describe('EngineerRtiPartController', () => {
  let controller: EngineerRtiPartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerRtiPartController],
      providers: [
        {
          provide: EngineerRtiPartService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerRtiPartController>(EngineerRtiPartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
