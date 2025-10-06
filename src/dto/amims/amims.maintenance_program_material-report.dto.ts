import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramMaterialDto } from './amims.maintenance_program_material.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMaintenanceProgramMaterialReportDto extends AmimsMaintenanceProgramMaterialDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
