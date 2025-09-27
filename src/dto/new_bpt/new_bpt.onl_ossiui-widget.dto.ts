import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiuiDto } from './new_bpt.onl_ossiui.dto';

export class NewBptOnlOssiuiWidgetDto extends NewBptOnlOssiuiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
