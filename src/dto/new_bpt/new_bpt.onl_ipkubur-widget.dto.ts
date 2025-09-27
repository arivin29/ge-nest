import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpkuburDto } from './new_bpt.onl_ipkubur.dto';

export class NewBptOnlIpkuburWidgetDto extends NewBptOnlIpkuburDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
