import { Test, TestingModule } from '@nestjs/testing';
import { ActypeController } from './actype.controller';
import { ActypeService } from './actype.service';

describe('ActypeController', () => {
  let controller: ActypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActypeController],
      providers: [
        {
          provide: ActypeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ActypeController>(ActypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
