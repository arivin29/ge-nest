import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpbkrjDto } from './new_bpt.onl_ipbkrj.dto';

export class NewBptOnlIpbkrjWidgetDto extends NewBptOnlIpbkrjDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
