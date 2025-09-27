import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiuppDto } from './new_bpt.onl_ossiupp.dto';

export class NewBptOnlOssiuppWidgetDto extends NewBptOnlOssiuppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
