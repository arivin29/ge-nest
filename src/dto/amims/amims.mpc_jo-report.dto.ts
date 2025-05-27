import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcJoDto } from './amims.mpc_jo.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';

export class AmimsMpcJoReportDto extends AmimsMpcJoDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;
}
