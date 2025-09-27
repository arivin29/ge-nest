import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssitoDto } from './new_bpt.onl_ossito.dto';

export class NewBptOnlOssitoWidgetDto extends NewBptOnlOssitoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
