import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNipptpDto } from './new_bpt.onl_nipptp.dto';

export class NewBptOnlNipptpWidgetDto extends NewBptOnlNipptpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
