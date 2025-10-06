import { ApiProperty } from '@nestjs/swagger';
import { AmimsWpJoDto } from './amims.wp_jo.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsWpDto } from './amims.wp.dto';

export class AmimsWpJoReportDto extends AmimsWpJoDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsWpDto })
  wp: AmimsWpDto;
}
