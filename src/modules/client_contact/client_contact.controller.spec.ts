import { Test, TestingModule } from '@nestjs/testing';
import { ClientContactController } from './client_contact.controller';
import { ClientContactService } from './client_contact.service';

describe('ClientContactController', () => {
  let controller: ClientContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientContactController],
      providers: [
        {
          provide: ClientContactService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ClientContactController>(ClientContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
