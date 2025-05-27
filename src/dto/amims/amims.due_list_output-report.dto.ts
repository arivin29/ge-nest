import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListOutputDto } from './amims.due_list_output.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsDueListOutputReportDto extends AmimsDueListOutputDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}
