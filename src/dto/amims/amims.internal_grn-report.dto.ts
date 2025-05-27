import { ApiProperty } from '@nestjs/swagger';
import { AmimsInternalGrnDto } from './amims.internal_grn.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsInternalGrnReportDto extends AmimsInternalGrnDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
