import { Test, TestingModule } from '@nestjs/testing';
import { PartActypeController } from './part_actype.controller';
import { PartActypeService } from './part_actype.service';

describe('PartActypeController', () => {
  let controller: PartActypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartActypeController],
      providers: [
        {
          provide: PartActypeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartActypeController>(PartActypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
