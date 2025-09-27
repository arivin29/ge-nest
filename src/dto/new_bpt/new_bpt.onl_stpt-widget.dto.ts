import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlStptDto } from './new_bpt.onl_stpt.dto';

export class NewBptOnlStptWidgetDto extends NewBptOnlStptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
