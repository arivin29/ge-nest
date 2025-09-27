import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiproDto } from './new_bpt.onl_sipro.dto';

export class NewBptOnlSiproWidgetDto extends NewBptOnlSiproDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
