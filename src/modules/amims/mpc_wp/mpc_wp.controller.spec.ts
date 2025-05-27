import { Test, TestingModule } from '@nestjs/testing';
import { MpcWpController } from './mpc_wp.controller';
import { MpcWpService } from './mpc_wp.service';

describe('MpcWpController', () => {
  let controller: MpcWpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcWpController],
      providers: [
        {
          provide: MpcWpService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcWpController>(MpcWpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
