import { ApiProperty } from '@nestjs/swagger';
import { AmimsRotaryFactorDto } from './amims.rotary_factor.dto';

export class AmimsRotaryFactorWidgetDto extends AmimsRotaryFactorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
