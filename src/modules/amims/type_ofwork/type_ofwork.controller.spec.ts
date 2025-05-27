import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfworkController } from './type_ofwork.controller';
import { TypeOfworkService } from './type_ofwork.service';

describe('TypeOfworkController', () => {
  let controller: TypeOfworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfworkController],
      providers: [
        {
          provide: TypeOfworkService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TypeOfworkController>(TypeOfworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
