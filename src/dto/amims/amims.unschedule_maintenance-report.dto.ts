import { ApiProperty } from '@nestjs/swagger';
import { AmimsUnscheduleMaintenanceDto } from './amims.unschedule_maintenance.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsUnscheduleMaintenanceReportDto extends AmimsUnscheduleMaintenanceDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
