import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListOutputDto } from './amims.due_list_output.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsDueListOutputReportDto extends AmimsDueListOutputDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
