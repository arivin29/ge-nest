import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnController } from './internal_grn.controller';
import { InternalGrnService } from './internal_grn.service';

describe('InternalGrnController', () => {
  let controller: InternalGrnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalGrnController],
      providers: [
        {
          provide: InternalGrnService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<InternalGrnController>(InternalGrnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
