import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikbDto } from './new_bpt.onl_sikb.dto';

export class NewBptOnlSikbWidgetDto extends NewBptOnlSikbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
