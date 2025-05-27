import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcWpDto } from './amims.mpc_wp.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsMpcWpReportDto extends AmimsMpcWpDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
