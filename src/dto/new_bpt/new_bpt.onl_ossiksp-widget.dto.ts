import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssikspDto } from './new_bpt.onl_ossiksp.dto';

export class NewBptOnlOssikspWidgetDto extends NewBptOnlOssikspDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
