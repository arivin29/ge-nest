import { Test, TestingModule } from '@nestjs/testing';
import { ClientSiteService } from './client_site.service';

describe('ClientSiteService', () => {
  let service: ClientSiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientSiteService],
    }).compile();

    service = module.get<ClientSiteService>(ClientSiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
