import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIurshwnDto } from './new_bpt.onl_iurshwn.dto';

export class NewBptOnlIurshwnWidgetDto extends NewBptOnlIurshwnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
