import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranTagController } from './penawaran_tag.controller';
import { PenawaranTagService } from './penawaran_tag.service';

describe('PenawaranTagController', () => {
  let controller: PenawaranTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenawaranTagController],
      providers: [
        {
          provide: PenawaranTagService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PenawaranTagController>(PenawaranTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
