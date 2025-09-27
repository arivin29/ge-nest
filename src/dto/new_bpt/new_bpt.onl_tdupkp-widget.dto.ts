import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupkpDto } from './new_bpt.onl_tdupkp.dto';

export class NewBptOnlTdupkpWidgetDto extends NewBptOnlTdupkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
