import { ApiProperty } from '@nestjs/swagger';
import { AmimsLastMaintenanceDto } from './amims.last_maintenance.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsLastMaintenanceReportDto extends AmimsLastMaintenanceDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
