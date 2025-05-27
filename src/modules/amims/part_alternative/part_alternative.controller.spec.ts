import { Test, TestingModule } from '@nestjs/testing';
import { PartAlternativeController } from './part_alternative.controller';
import { PartAlternativeService } from './part_alternative.service';

describe('PartAlternativeController', () => {
  let controller: PartAlternativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartAlternativeController],
      providers: [
        {
          provide: PartAlternativeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartAlternativeController>(PartAlternativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
