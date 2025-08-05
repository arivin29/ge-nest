import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartActypeDto } from './amims.part_actype.dto';
import { AmimsActypeDto } from './amims.actype.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPartActypeReportDto extends AmimsPartActypeDto {
  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
