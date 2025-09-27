import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssikspkcpDto } from './new_bpt.onl_ossikspkcp.dto';

export class NewBptOnlOssikspkcpWidgetDto extends NewBptOnlOssikspkcpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
