import { ApiProperty } from '@nestjs/swagger';
import { AmimsLifeTimeLimitDto } from './amims.life_time_limit.dto';

export class AmimsLifeTimeLimitWidgetDto extends AmimsLifeTimeLimitDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
