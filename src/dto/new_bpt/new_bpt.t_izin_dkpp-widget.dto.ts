import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinDkppDto } from './new_bpt.t_izin_dkpp.dto';

export class NewBptTIzinDkppWidgetDto extends NewBptTIzinDkppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
