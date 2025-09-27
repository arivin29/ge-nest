import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuohDto } from './new_bpt.onl_iuoh.dto';

export class NewBptOnlIuohWidgetDto extends NewBptOnlIuohDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
