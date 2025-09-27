import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPemohonDto } from './new_bpt.t_pemohon.dto';

export class NewBptTPemohonWidgetDto extends NewBptTPemohonDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
