import { Test, TestingModule } from '@nestjs/testing';
import { ClientSiteController } from './client_site.controller';
import { ClientSiteService } from './client_site.service';

describe('ClientSiteController', () => {
  let controller: ClientSiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientSiteController],
      providers: [
        {
          provide: ClientSiteService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ClientSiteController>(ClientSiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
