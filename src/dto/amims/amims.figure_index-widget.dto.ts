import { ApiProperty } from '@nestjs/swagger';
import { AmimsFigureIndexDto } from './amims.figure_index.dto';

export class AmimsFigureIndexWidgetDto extends AmimsFigureIndexDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
