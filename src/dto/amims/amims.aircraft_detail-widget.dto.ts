import { ApiProperty } from '@nestjs/swagger';
import { AmimsAircraftDetailDto } from './amims.aircraft_detail.dto';

export class AmimsAircraftDetailWidgetDto extends AmimsAircraftDetailDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
