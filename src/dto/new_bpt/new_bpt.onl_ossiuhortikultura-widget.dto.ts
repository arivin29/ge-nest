import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiuhortikulturaDto } from './new_bpt.onl_ossiuhortikultura.dto';

export class NewBptOnlOssiuhortikulturaWidgetDto extends NewBptOnlOssiuhortikulturaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
