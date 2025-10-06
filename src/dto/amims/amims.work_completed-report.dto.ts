import { ApiProperty } from '@nestjs/swagger';
import { AmimsWorkCompletedDto } from './amims.work_completed.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsWorkCompletedReportDto extends AmimsWorkCompletedDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
