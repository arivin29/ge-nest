import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinSyaratItemDto } from './new_bpt.t_izin_syarat_item.dto';

export class NewBptTIzinSyaratItemWidgetDto extends NewBptTIzinSyaratItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
