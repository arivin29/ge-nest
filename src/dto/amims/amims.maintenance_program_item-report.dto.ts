import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramItemDto } from './amims.maintenance_program_item.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMaintenanceProgramItemReportDto extends AmimsMaintenanceProgramItemDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
