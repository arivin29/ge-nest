import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssipalDto } from './new_bpt.onl_ossipal.dto';

export class NewBptOnlOssipalWidgetDto extends NewBptOnlOssipalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
