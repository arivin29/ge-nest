import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogProcessDto } from './amims.log_process.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsLogProcessReportDto extends AmimsLogProcessDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
