import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartInstallOldDto } from './amims.part_install_old.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPartInstallOldReportDto extends AmimsPartInstallOldDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
