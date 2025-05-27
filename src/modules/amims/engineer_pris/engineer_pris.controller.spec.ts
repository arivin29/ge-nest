import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisController } from './engineer_pris.controller';
import { EngineerPrisService } from './engineer_pris.service';

describe('EngineerPrisController', () => {
  let controller: EngineerPrisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPrisController],
      providers: [
        {
          provide: EngineerPrisService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPrisController>(EngineerPrisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
