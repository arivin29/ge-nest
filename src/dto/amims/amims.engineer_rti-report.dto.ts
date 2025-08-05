import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiDto } from './amims.engineer_rti.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsEngineerRtiReportDto extends AmimsEngineerRtiDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
