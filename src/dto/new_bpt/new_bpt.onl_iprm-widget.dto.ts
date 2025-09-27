import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIprmDto } from './new_bpt.onl_iprm.dto';

export class NewBptOnlIprmWidgetDto extends NewBptOnlIprmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
