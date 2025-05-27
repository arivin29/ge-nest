import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartActypeDto } from './amims.part_actype.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsActypeDto } from './amims.actype.dto';

export class AmimsPartActypeReportDto extends AmimsPartActypeDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;
}
