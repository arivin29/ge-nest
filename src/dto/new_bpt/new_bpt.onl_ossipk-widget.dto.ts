import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipkDto } from './new_bpt.onl_ossipk.dto';

export class NewBptOnlOssipkWidgetDto extends NewBptOnlOssipkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
