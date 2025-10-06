import { ApiProperty } from '@nestjs/swagger';
import { AmimsWpDto } from './amims.wp.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsWpReportDto extends AmimsWpDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
