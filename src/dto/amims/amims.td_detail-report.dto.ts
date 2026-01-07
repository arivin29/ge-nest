import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDetailDto } from './amims.td_detail.dto';
import { AmimsTdDto } from './amims.td.dto';
import { AmimsActypeDto } from './amims.actype.dto';

export class AmimsTdDetailReportDto extends AmimsTdDetailDto {
  @ApiProperty({ type: AmimsTdDto })
  td: AmimsTdDto;

  @ApiProperty({ type: AmimsActypeDto })
  actype: AmimsActypeDto;
}
