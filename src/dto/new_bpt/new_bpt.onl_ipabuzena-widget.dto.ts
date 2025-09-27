import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpabuzenaDto } from './new_bpt.onl_ipabuzena.dto';

export class NewBptOnlIpabuzenaWidgetDto extends NewBptOnlIpabuzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
