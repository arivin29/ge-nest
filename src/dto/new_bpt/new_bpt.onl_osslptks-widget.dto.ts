import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsslptksDto } from './new_bpt.onl_osslptks.dto';

export class NewBptOnlOsslptksWidgetDto extends NewBptOnlOsslptksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
