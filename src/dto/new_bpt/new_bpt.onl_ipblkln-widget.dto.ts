import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpblklnDto } from './new_bpt.onl_ipblkln.dto';

export class NewBptOnlIpblklnWidgetDto extends NewBptOnlIpblklnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
