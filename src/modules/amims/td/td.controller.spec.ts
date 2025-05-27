import { Test, TestingModule } from '@nestjs/testing';
import { TdController } from './td.controller';
import { TdService } from './td.service';

describe('TdController', () => {
  let controller: TdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdController],
      providers: [
        {
          provide: TdService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TdController>(TdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
