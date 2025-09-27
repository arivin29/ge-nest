import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirikphDto } from './new_bpt.onl_nirikph.dto';

export class NewBptOnlNirikphWidgetDto extends NewBptOnlNirikphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
