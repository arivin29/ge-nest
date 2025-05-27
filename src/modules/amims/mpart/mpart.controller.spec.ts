import { Test, TestingModule } from '@nestjs/testing';
import { MpartController } from './mpart.controller';
import { MpartService } from './mpart.service';

describe('MpartController', () => {
  let controller: MpartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpartController],
      providers: [
        {
          provide: MpartService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpartController>(MpartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
