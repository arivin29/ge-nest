import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDetailDto } from './amims.td_detail.dto';
import { AmimsActypeDto } from './amims.actype.dto';
import { AmimsTdDto } from './amims.td.dto';

export class AmimsTdDetailReportDto extends AmimsTdDetailDto {
  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;

  @ApiProperty({ type: AmimsTdDto })
  td: AmimsTdDto;
}
