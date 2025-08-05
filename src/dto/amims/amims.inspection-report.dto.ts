import { ApiProperty } from '@nestjs/swagger';
import { AmimsInspectionDto } from './amims.inspection.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsInspectionReportDto extends AmimsInspectionDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
