import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPmtrDto } from './amims.engineer_pmtr.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsEngineerPmtrReportDto extends AmimsEngineerPmtrDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
