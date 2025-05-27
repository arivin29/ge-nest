import { ApiProperty } from '@nestjs/swagger';
import { AmimsBinDto } from './amims.bin.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsBinReportDto extends AmimsBinDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
