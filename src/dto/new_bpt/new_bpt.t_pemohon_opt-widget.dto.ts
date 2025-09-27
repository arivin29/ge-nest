import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPemohonOptDto } from './new_bpt.t_pemohon_opt.dto';

export class NewBptTPemohonOptWidgetDto extends NewBptTPemohonOptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
