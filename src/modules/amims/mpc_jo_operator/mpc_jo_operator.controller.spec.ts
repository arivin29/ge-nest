import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoOperatorController } from './mpc_jo_operator.controller';
import { MpcJoOperatorService } from './mpc_jo_operator.service';

describe('MpcJoOperatorController', () => {
  let controller: MpcJoOperatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcJoOperatorController],
      providers: [
        {
          provide: MpcJoOperatorService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcJoOperatorController>(MpcJoOperatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
