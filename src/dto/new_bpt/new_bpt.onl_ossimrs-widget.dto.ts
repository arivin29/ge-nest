import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssimrsDto } from './new_bpt.onl_ossimrs.dto';

export class NewBptOnlOssimrsWidgetDto extends NewBptOnlOssimrsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
