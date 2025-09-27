import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiujkDto } from './new_bpt.onl_ossiujk.dto';

export class NewBptOnlOssiujkWidgetDto extends NewBptOnlOssiujkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
