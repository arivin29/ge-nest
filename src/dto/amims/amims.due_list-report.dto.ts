import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListDto } from './amims.due_list.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';

export class AmimsDueListReportDto extends AmimsDueListDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;
}
