import { Test, TestingModule } from '@nestjs/testing';
import { PartAtaController } from './part_ata.controller';
import { PartAtaService } from './part_ata.service';

describe('PartAtaController', () => {
  let controller: PartAtaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartAtaController],
      providers: [
        {
          provide: PartAtaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartAtaController>(PartAtaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
