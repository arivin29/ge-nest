import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipspfDto } from './new_bpt.onl_ossipspf.dto';

export class NewBptOnlOssipspfWidgetDto extends NewBptOnlOssipspfDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
