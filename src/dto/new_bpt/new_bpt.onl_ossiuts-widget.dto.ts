import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiutsDto } from './new_bpt.onl_ossiuts.dto';

export class NewBptOnlOssiutsWidgetDto extends NewBptOnlOssiutsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
