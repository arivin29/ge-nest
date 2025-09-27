import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikroDto } from './new_bpt.onl_sikro.dto';

export class NewBptOnlSikroWidgetDto extends NewBptOnlSikroDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
