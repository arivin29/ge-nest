import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpptDto } from './new_bpt.onl_ippt.dto';

export class NewBptOnlIpptWidgetDto extends NewBptOnlIpptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
