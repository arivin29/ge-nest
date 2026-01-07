import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisDto } from './amims.engineer_pris.dto';
import { AmimsPositionDto } from './amims.position.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsEngineerPrisReportDto extends AmimsEngineerPrisDto {
  @ApiProperty({ type: AmimsPositionDto })
  position: AmimsPositionDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
