import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikatlmDto } from './new_bpt.onl_sikatlm.dto';

export class NewBptOnlSikatlmWidgetDto extends NewBptOnlSikatlmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
