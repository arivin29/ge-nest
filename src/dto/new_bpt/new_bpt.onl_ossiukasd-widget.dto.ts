import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiukasdDto } from './new_bpt.onl_ossiukasd.dto';

export class NewBptOnlOssiukasdWidgetDto extends NewBptOnlOssiukasdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
