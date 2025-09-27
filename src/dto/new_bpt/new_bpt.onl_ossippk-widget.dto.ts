import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssippkDto } from './new_bpt.onl_ossippk.dto';

export class NewBptOnlOssippkWidgetDto extends NewBptOnlOssippkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
