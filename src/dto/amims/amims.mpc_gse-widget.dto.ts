import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcGseDto } from './amims.mpc_gse.dto';

export class AmimsMpcGseWidgetDto extends AmimsMpcGseDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
