import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiokDto } from './new_bpt.onl_ossiok.dto';

export class NewBptOnlOssiokWidgetDto extends NewBptOnlOssiokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
