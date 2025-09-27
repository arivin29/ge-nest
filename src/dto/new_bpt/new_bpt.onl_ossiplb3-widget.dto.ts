import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiplb3Dto } from './new_bpt.onl_ossiplb3.dto';

export class NewBptOnlOssiplb3WidgetDto extends NewBptOnlOssiplb3Dto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
