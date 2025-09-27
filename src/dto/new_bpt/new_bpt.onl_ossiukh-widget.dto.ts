import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiukhDto } from './new_bpt.onl_ossiukh.dto';

export class NewBptOnlOssiukhWidgetDto extends NewBptOnlOssiukhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
