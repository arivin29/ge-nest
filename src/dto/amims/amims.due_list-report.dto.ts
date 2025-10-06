import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListDto } from './amims.due_list.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsDueListReportDto extends AmimsDueListDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
