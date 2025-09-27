import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippkphDto } from './new_bpt.onl_nippkph.dto';

export class NewBptOnlNippkphWidgetDto extends NewBptOnlNippkphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
