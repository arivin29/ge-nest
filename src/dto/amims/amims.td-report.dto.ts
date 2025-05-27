import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDto } from './amims.td.dto';
import { AmimsDoctypeDto } from './amims.doctype.dto';

export class AmimsTdReportDto extends AmimsTdDto {
  @ApiProperty({ type: AmimsDoctypeDto })
  doctype: AmimsDoctypeDto;
}
