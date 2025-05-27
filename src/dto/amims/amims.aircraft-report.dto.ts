import { ApiProperty } from '@nestjs/swagger';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsActypeDto } from './amims.actype.dto';

export class AmimsAircraftReportDto extends AmimsAircraftDto {
  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;
}
