import { ApiProperty } from '@nestjs/swagger';
import { AmimsAircraftDetailDto } from './amims.aircraft_detail.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsAircraftDetailReportDto extends AmimsAircraftDetailDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
