import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiDto } from './amims.engineer_rti.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsEngineerRtiReportDto extends AmimsEngineerRtiDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
