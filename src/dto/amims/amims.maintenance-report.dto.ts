import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMaintenanceReportDto extends AmimsMaintenanceDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
