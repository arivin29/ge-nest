import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiuperkebunanDto } from './new_bpt.onl_ossiuperkebunan.dto';

export class NewBptOnlOssiuperkebunanWidgetDto extends NewBptOnlOssiuperkebunanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
