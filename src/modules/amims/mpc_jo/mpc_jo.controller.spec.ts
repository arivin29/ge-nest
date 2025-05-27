import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoController } from './mpc_jo.controller';
import { MpcJoService } from './mpc_jo.service';

describe('MpcJoController', () => {
  let controller: MpcJoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcJoController],
      providers: [
        {
          provide: MpcJoService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcJoController>(MpcJoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
