import { Test, TestingModule } from '@nestjs/testing';
import { FakturController } from './faktur.controller';
import { FakturService } from './faktur.service';

describe('FakturController', () => {
  let controller: FakturController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakturController],
      providers: [
        {
          provide: FakturService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FakturController>(FakturController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
