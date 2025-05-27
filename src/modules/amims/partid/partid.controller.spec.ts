import { Test, TestingModule } from '@nestjs/testing';
import { PartidController } from './partid.controller';
import { PartidService } from './partid.service';

describe('PartidController', () => {
  let controller: PartidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartidController],
      providers: [
        {
          provide: PartidService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartidController>(PartidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
