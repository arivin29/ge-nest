import { ApiProperty } from '@nestjs/swagger';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsAircraftWidgetDto extends AmimsAircraftDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
