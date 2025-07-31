import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranController } from './penawaran.controller';
import { PenawaranService } from './penawaran.service';

describe('PenawaranController', () => {
  let controller: PenawaranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenawaranController],
      providers: [
        {
          provide: PenawaranService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PenawaranController>(PenawaranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
