import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcPiroDto } from './amims.mpc_piro.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsMpcPiroReportDto extends AmimsMpcPiroDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
