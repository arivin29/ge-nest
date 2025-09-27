import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpikfDto } from './new_bpt.onl_ipikf.dto';

export class NewBptOnlIpikfWidgetDto extends NewBptOnlIpikfDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
