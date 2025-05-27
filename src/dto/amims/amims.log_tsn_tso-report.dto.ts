import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogTsnTsoDto } from './amims.log_tsn_tso.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsLogTsnTsoReportDto extends AmimsLogTsnTsoDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
