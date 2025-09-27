import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinSkDto } from './new_bpt.t_izin_sk.dto';

export class NewBptTIzinSkWidgetDto extends NewBptTIzinSkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
