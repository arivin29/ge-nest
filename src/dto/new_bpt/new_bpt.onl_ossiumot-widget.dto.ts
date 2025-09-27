import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiumotDto } from './new_bpt.onl_ossiumot.dto';

export class NewBptOnlOssiumotWidgetDto extends NewBptOnlOssiumotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
