import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssitakDto } from './new_bpt.onl_ossitak.dto';

export class NewBptOnlOssitakWidgetDto extends NewBptOnlOssitakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
