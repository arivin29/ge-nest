import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDetailAcDto } from './amims.td_detail_ac.dto';

export class AmimsTdDetailAcWidgetDto extends AmimsTdDetailAcDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
