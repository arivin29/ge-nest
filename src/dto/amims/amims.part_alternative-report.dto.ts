import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartAlternativeDto } from './amims.part_alternative.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPartAlternativeReportDto extends AmimsPartAlternativeDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
