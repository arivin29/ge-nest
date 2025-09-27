import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiurphDto } from './new_bpt.onl_ossiurph.dto';

export class NewBptOnlOssiurphWidgetDto extends NewBptOnlOssiurphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
