import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssioppjkDto } from './new_bpt.onl_ossioppjk.dto';

export class NewBptOnlOssioppjkWidgetDto extends NewBptOnlOssioppjkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
