import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpkapDto } from './new_bpt.onl_ipkap.dto';

export class NewBptOnlIpkapWidgetDto extends NewBptOnlIpkapDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
