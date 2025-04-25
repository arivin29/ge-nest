import { Test, TestingModule } from '@nestjs/testing';
import { TeknisiController } from './teknisi.controller';
import { TeknisiService } from './teknisi.service';

describe('TeknisiController', () => {
  let controller: TeknisiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeknisiController],
      providers: [
        {
          provide: TeknisiService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TeknisiController>(TeknisiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
