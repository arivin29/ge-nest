import { Test, TestingModule } from '@nestjs/testing';
import { PartLogController } from './part_log.controller';
import { PartLogService } from './part_log.service';

describe('PartLogController', () => {
  let controller: PartLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartLogController],
      providers: [
        {
          provide: PartLogService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartLogController>(PartLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
