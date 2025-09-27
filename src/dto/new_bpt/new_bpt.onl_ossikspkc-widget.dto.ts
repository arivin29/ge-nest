import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssikspkcDto } from './new_bpt.onl_ossikspkc.dto';

export class NewBptOnlOssikspkcWidgetDto extends NewBptOnlOssikspkcDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
