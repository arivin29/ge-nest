import { ApiProperty } from '@nestjs/swagger';
import { AmimsWpJoDto } from './amims.wp_jo.dto';
import { AmimsWpDto } from './amims.wp.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsWpJoReportDto extends AmimsWpJoDto {
  @ApiProperty({ type: AmimsWpDto })
  wp: AmimsWpDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
