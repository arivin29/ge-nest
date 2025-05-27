import { Test, TestingModule } from '@nestjs/testing';
import { MpcGseController } from './mpc_gse.controller';
import { MpcGseService } from './mpc_gse.service';

describe('MpcGseController', () => {
  let controller: MpcGseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcGseController],
      providers: [
        {
          provide: MpcGseService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcGseController>(MpcGseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
