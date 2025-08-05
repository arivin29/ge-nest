import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcJoDto } from './amims.mpc_jo.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsMpcJoReportDto extends AmimsMpcJoDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
