import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiptgmDto } from './new_bpt.onl_siptgm.dto';

export class NewBptOnlSiptgmWidgetDto extends NewBptOnlSiptgmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
