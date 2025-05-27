import { Test, TestingModule } from '@nestjs/testing';
import { MelController } from './mel.controller';
import { MelService } from './mel.service';

describe('MelController', () => {
  let controller: MelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MelController],
      providers: [
        {
          provide: MelService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MelController>(MelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
