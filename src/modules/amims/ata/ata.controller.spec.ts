import { Test, TestingModule } from '@nestjs/testing';
import { AtaController } from './ata.controller';
import { AtaService } from './ata.service';

describe('AtaController', () => {
  let controller: AtaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtaController],
      providers: [
        {
          provide: AtaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AtaController>(AtaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
