import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinDto } from './new_bpt.t_izin.dto';

export class NewBptTIzinWidgetDto extends NewBptTIzinDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
