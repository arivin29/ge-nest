import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnController } from './engineer_pris_return.controller';
import { EngineerPrisReturnService } from './engineer_pris_return.service';

describe('EngineerPrisReturnController', () => {
  let controller: EngineerPrisReturnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPrisReturnController],
      providers: [
        {
          provide: EngineerPrisReturnService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPrisReturnController>(EngineerPrisReturnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
