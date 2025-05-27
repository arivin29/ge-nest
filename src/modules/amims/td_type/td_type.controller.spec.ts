import { Test, TestingModule } from '@nestjs/testing';
import { TdTypeController } from './td_type.controller';
import { TdTypeService } from './td_type.service';

describe('TdTypeController', () => {
  let controller: TdTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdTypeController],
      providers: [
        {
          provide: TdTypeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TdTypeController>(TdTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
