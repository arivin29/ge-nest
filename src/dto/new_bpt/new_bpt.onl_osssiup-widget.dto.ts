import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsssiupDto } from './new_bpt.onl_osssiup.dto';

export class NewBptOnlOsssiupWidgetDto extends NewBptOnlOsssiupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
