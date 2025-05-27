import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogJoDto } from './amims.tech_log_jo.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsTechLogJoReportDto extends AmimsTechLogJoDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
