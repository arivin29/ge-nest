import { ApiProperty } from '@nestjs/swagger';
import { NewBptSpIptkesDto } from './new_bpt.sp_iptkes.dto';

export class NewBptSpIptkesWidgetDto extends NewBptSpIptkesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
