import { Test, TestingModule } from '@nestjs/testing';
import { WpJoController } from './wp_jo.controller';
import { WpJoService } from './wp_jo.service';

describe('WpJoController', () => {
  let controller: WpJoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WpJoController],
      providers: [
        {
          provide: WpJoService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WpJoController>(WpJoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
