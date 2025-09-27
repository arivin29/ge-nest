import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippbrphDto } from './new_bpt.onl_nippbrph.dto';

export class NewBptOnlNippbrphWidgetDto extends NewBptOnlNippbrphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
