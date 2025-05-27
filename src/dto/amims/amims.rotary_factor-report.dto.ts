import { ApiProperty } from '@nestjs/swagger';
import { AmimsRotaryFactorDto } from './amims.rotary_factor.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsRotaryFactorReportDto extends AmimsRotaryFactorDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
