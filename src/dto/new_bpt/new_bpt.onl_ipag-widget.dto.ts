import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpagDto } from './new_bpt.onl_ipag.dto';

export class NewBptOnlIpagWidgetDto extends NewBptOnlIpagDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
