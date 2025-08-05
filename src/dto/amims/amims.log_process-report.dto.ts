import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogProcessDto } from './amims.log_process.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsLogProcessReportDto extends AmimsLogProcessDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
