import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipatlmDto } from './new_bpt.onl_sipatlm.dto';

export class NewBptOnlSipatlmWidgetDto extends NewBptOnlSipatlmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
