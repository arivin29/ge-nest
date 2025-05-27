import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrDto } from './amims.pur_pr.dto';
import { AmimsPositionDto } from './amims.position.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsPurPrReportDto extends AmimsPurPrDto {
  @ApiProperty({ type: AmimsPositionDto })
  position: AmimsPositionDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
