import { Test, TestingModule } from '@nestjs/testing';
import { LibFormIssuedController } from './lib_form_issued.controller';
import { LibFormIssuedService } from './lib_form_issued.service';

describe('LibFormIssuedController', () => {
  let controller: LibFormIssuedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibFormIssuedController],
      providers: [
        {
          provide: LibFormIssuedService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LibFormIssuedController>(LibFormIssuedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
