import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssimrscdDto } from './new_bpt.onl_ossimrscd.dto';

export class NewBptOnlOssimrscdWidgetDto extends NewBptOnlOssimrscdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
