import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIupptDto } from './new_bpt.onl_iuppt.dto';

export class NewBptOnlIupptWidgetDto extends NewBptOnlIupptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
