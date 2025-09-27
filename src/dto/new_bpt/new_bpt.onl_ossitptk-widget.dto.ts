import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssitptkDto } from './new_bpt.onl_ossitptk.dto';

export class NewBptOnlOssitptkWidgetDto extends NewBptOnlOssitptkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
