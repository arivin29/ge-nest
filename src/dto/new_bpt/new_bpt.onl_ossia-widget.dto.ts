import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiaDto } from './new_bpt.onl_ossia.dto';

export class NewBptOnlOssiaWidgetDto extends NewBptOnlOssiaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
