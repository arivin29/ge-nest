import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechDefectDto } from './amims.tech_defect.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsTechDefectReportDto extends AmimsTechDefectDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
