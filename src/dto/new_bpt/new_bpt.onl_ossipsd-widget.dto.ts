import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipsdDto } from './new_bpt.onl_ossipsd.dto';

export class NewBptOnlOssipsdWidgetDto extends NewBptOnlOssipsdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
