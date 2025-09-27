import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiplb3bbpDto } from './new_bpt.onl_ossiplb3bbp.dto';

export class NewBptOnlOssiplb3bbpWidgetDto extends NewBptOnlOssiplb3bbpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
