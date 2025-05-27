import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfworkWidgetService } from './type_ofwork_widget.service';
import { DataSource } from 'typeorm';

describe('TypeOfworkWidgetService', () => {
  let service: TypeOfworkWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeOfworkWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<TypeOfworkWidgetService>(TypeOfworkWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
