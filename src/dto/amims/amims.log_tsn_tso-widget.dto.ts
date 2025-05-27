import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogTsnTsoDto } from './amims.log_tsn_tso.dto';

export class AmimsLogTsnTsoWidgetDto extends AmimsLogTsnTsoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
