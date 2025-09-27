import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssputpDto } from './new_bpt.onl_ossputp.dto';

export class NewBptOnlOssputpWidgetDto extends NewBptOnlOssputpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
