import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurGrnDto } from './amims.pur_grn.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsPurGrnReportDto extends AmimsPurGrnDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
