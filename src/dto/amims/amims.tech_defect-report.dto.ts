import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechDefectDto } from './amims.tech_defect.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsTechDefectReportDto extends AmimsTechDefectDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
