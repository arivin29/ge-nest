import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssippvDto } from './new_bpt.onl_ossippv.dto';

export class NewBptOnlOssippvWidgetDto extends NewBptOnlOssippvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
