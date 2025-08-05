import { ApiProperty } from '@nestjs/swagger';
import { AmimsVDueListOutputDto } from './amims.v_due_list_output.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsVDueListOutputReportDto extends AmimsVDueListOutputDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
