import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartInstallDto } from './amims.part_install.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPartInstallReportDto extends AmimsPartInstallDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
