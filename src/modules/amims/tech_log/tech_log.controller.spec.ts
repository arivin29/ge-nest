import { Test, TestingModule } from '@nestjs/testing';
import { TechLogController } from './tech_log.controller';
import { TechLogService } from './tech_log.service';

describe('TechLogController', () => {
  let controller: TechLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechLogController],
      providers: [
        {
          provide: TechLogService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechLogController>(TechLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
