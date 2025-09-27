import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssippnDto } from './new_bpt.onl_ossippn.dto';

export class NewBptOnlOssippnWidgetDto extends NewBptOnlOssippnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
