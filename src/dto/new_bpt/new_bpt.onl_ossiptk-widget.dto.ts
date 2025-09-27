import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiptkDto } from './new_bpt.onl_ossiptk.dto';

export class NewBptOnlOssiptkWidgetDto extends NewBptOnlOssiptkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
