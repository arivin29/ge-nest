import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogEngineDto } from './amims.tech_log_engine.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsTechLogEngineReportDto extends AmimsTechLogEngineDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
