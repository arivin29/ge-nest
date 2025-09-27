import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssimbgDto } from './new_bpt.onl_ossimbg.dto';

export class NewBptOnlOssimbgWidgetDto extends NewBptOnlOssimbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
