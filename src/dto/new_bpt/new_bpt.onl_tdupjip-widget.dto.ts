import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupjipDto } from './new_bpt.onl_tdupjip.dto';

export class NewBptOnlTdupjipWidgetDto extends NewBptOnlTdupjipDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
