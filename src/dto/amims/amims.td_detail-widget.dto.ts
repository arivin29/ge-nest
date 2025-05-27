import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDetailDto } from './amims.td_detail.dto';

export class AmimsTdDetailWidgetDto extends AmimsTdDetailDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
