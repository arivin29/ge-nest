import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiprtakDto } from './new_bpt.onl_ossiprtak.dto';

export class NewBptOnlOssiprtakWidgetDto extends NewBptOnlOssiprtakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
