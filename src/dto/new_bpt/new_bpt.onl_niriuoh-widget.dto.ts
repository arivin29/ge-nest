import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNiriuohDto } from './new_bpt.onl_niriuoh.dto';

export class NewBptOnlNiriuohWidgetDto extends NewBptOnlNiriuohDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
