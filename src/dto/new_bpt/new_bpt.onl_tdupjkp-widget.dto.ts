import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupjkpDto } from './new_bpt.onl_tdupjkp.dto';

export class NewBptOnlTdupjkpWidgetDto extends NewBptOnlTdupjkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
