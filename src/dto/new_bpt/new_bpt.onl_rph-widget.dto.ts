import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRphDto } from './new_bpt.onl_rph.dto';

export class NewBptOnlRphWidgetDto extends NewBptOnlRphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
