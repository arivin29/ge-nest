import { Test, TestingModule } from '@nestjs/testing';
import { TechLogJoController } from './tech_log_jo.controller';
import { TechLogJoService } from './tech_log_jo.service';

describe('TechLogJoController', () => {
  let controller: TechLogJoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechLogJoController],
      providers: [
        {
          provide: TechLogJoService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechLogJoController>(TechLogJoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
