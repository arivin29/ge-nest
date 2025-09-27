import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinPuprDto } from './new_bpt.t_izin_pupr.dto';

export class NewBptTIzinPuprWidgetDto extends NewBptTIzinPuprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
