import { ApiProperty } from '@nestjs/swagger';
import { AmimsInspectionDto } from './amims.inspection.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsInspectionReportDto extends AmimsInspectionDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
