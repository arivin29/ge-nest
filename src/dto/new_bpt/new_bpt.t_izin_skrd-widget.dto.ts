import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinSkrdDto } from './new_bpt.t_izin_skrd.dto';

export class NewBptTIzinSkrdWidgetDto extends NewBptTIzinSkrdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
