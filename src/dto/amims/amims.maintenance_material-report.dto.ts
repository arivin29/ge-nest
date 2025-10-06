import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceMaterialDto } from './amims.maintenance_material.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMaintenanceMaterialReportDto extends AmimsMaintenanceMaterialDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
