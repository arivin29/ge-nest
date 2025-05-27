import { Test, TestingModule } from '@nestjs/testing';
import { McurrencyController } from './mcurrency.controller';
import { McurrencyService } from './mcurrency.service';

describe('McurrencyController', () => {
  let controller: McurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [McurrencyController],
      providers: [
        {
          provide: McurrencyService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<McurrencyController>(McurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
