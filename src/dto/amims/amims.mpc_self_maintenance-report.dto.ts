import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcSelfMaintenanceDto } from './amims.mpc_self_maintenance.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsMpcSelfMaintenanceReportDto extends AmimsMpcSelfMaintenanceDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
