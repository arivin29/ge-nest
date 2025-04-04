import { Test, TestingModule } from '@nestjs/testing';
import { ContactClientUseController } from './contact_client_use.controller';
import { ContactClientUseService } from './contact_client_use.service';

describe('ContactClientUseController', () => {
  let controller: ContactClientUseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactClientUseController],
      providers: [
        {
          provide: ContactClientUseService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ContactClientUseController>(ContactClientUseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
