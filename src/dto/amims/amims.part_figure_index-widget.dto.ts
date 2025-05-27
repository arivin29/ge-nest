import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartFigureIndexDto } from './amims.part_figure_index.dto';

export class AmimsPartFigureIndexWidgetDto extends AmimsPartFigureIndexDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
