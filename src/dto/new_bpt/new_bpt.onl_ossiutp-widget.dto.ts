import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiutpDto } from './new_bpt.onl_ossiutp.dto';

export class NewBptOnlOssiutpWidgetDto extends NewBptOnlOssiutpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
