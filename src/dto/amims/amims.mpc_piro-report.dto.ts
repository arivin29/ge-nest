import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcPiroDto } from './amims.mpc_piro.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsMpcPiroReportDto extends AmimsMpcPiroDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
