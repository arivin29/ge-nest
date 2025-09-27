import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikfisDto } from './new_bpt.onl_sikfis.dto';

export class NewBptOnlSikfisWidgetDto extends NewBptOnlSikfisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
