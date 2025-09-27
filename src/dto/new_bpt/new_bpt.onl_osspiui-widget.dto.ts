import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspiuiDto } from './new_bpt.onl_osspiui.dto';

export class NewBptOnlOsspiuiWidgetDto extends NewBptOnlOsspiuiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
