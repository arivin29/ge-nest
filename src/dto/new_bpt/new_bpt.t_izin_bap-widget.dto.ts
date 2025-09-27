import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinBapDto } from './new_bpt.t_izin_bap.dto';

export class NewBptTIzinBapWidgetDto extends NewBptTIzinBapDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
