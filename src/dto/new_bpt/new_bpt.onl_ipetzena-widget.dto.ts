import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpetzenaDto } from './new_bpt.onl_ipetzena.dto';

export class NewBptOnlIpetzenaWidgetDto extends NewBptOnlIpetzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
