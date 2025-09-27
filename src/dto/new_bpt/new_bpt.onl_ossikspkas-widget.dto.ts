import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssikspkasDto } from './new_bpt.onl_ossikspkas.dto';

export class NewBptOnlOssikspkasWidgetDto extends NewBptOnlOssikspkasDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
