import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpkDto } from './new_bpt.onl_ipk.dto';

export class NewBptOnlIpkWidgetDto extends NewBptOnlIpkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
