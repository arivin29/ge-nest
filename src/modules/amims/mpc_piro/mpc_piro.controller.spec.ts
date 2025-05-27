import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroController } from './mpc_piro.controller';
import { MpcPiroService } from './mpc_piro.service';

describe('MpcPiroController', () => {
  let controller: MpcPiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcPiroController],
      providers: [
        {
          provide: MpcPiroService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcPiroController>(MpcPiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
