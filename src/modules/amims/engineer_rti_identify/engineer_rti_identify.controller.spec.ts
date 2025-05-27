import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiIdentifyController } from './engineer_rti_identify.controller';
import { EngineerRtiIdentifyService } from './engineer_rti_identify.service';

describe('EngineerRtiIdentifyController', () => {
  let controller: EngineerRtiIdentifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerRtiIdentifyController],
      providers: [
        {
          provide: EngineerRtiIdentifyService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerRtiIdentifyController>(EngineerRtiIdentifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
