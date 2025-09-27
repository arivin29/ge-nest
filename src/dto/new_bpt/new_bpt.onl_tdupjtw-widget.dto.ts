import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupjtwDto } from './new_bpt.onl_tdupjtw.dto';

export class NewBptOnlTdupjtwWidgetDto extends NewBptOnlTdupjtwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
