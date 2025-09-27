import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSippmDto } from './new_bpt.onl_sippm.dto';

export class NewBptOnlSippmWidgetDto extends NewBptOnlSippmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
