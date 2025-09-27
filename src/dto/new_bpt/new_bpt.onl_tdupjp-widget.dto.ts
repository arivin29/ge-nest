import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupjpDto } from './new_bpt.onl_tdupjp.dto';

export class NewBptOnlTdupjpWidgetDto extends NewBptOnlTdupjpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
