import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdRefDto } from './amims.td_ref.dto';
import { AmimsTdDto } from './amims.td.dto';

export class AmimsTdRefReportDto extends AmimsTdRefDto {
  @ApiProperty({ type: AmimsTdDto })
  td: AmimsTdDto;
}
