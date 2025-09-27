import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNipphDto } from './new_bpt.onl_nipph.dto';

export class NewBptOnlNipphWidgetDto extends NewBptOnlNipphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
