import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssilingkunganDto } from './new_bpt.onl_ossilingkungan.dto';

export class NewBptOnlOssilingkunganWidgetDto extends NewBptOnlOssilingkunganDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
