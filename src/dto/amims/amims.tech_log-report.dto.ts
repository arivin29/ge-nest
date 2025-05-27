import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogDto } from './amims.tech_log.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsTechLogReportDto extends AmimsTechLogDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
