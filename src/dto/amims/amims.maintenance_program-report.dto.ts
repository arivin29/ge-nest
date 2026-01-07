import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramDto } from './amims.maintenance_program.dto';
import { AmimsActypeDto } from './amims.actype.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsMaintenanceProgramReportDto extends AmimsMaintenanceProgramDto {
  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
