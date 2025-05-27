import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrController } from './engineer_pmtr.controller';
import { EngineerPmtrService } from './engineer_pmtr.service';

describe('EngineerPmtrController', () => {
  let controller: EngineerPmtrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPmtrController],
      providers: [
        {
          provide: EngineerPmtrService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPmtrController>(EngineerPmtrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
