import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipppkDto } from './new_bpt.onl_ossipppk.dto';

export class NewBptOnlOssipppkWidgetDto extends NewBptOnlOssipppkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
