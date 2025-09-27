import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinRapatDto } from './new_bpt.t_izin_rapat.dto';

export class NewBptTIzinRapatWidgetDto extends NewBptTIzinRapatDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
