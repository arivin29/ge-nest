import { ApiProperty } from '@nestjs/swagger';
import { AmimsLocationFlightDto } from './amims.location_flight.dto';

export class AmimsLocationFlightWidgetDto extends AmimsLocationFlightDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
