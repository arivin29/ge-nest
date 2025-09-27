import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiospkDto } from './new_bpt.onl_ossiospk.dto';

export class NewBptOnlOssiospkWidgetDto extends NewBptOnlOssiospkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
