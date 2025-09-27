import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPengirimanDto } from './new_bpt.t_pengiriman.dto';

export class NewBptTPengirimanWidgetDto extends NewBptTPengirimanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
