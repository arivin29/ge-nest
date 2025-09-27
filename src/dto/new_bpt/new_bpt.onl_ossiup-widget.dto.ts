import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiupDto } from './new_bpt.onl_ossiup.dto';

export class NewBptOnlOssiupWidgetDto extends NewBptOnlOssiupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
