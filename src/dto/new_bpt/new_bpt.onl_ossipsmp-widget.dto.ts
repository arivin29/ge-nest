import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipsmpDto } from './new_bpt.onl_ossipsmp.dto';

export class NewBptOnlOssipsmpWidgetDto extends NewBptOnlOssipsmpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
