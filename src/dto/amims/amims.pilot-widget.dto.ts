import { ApiProperty } from '@nestjs/swagger';
import { AmimsPilotDto } from './amims.pilot.dto';

export class AmimsPilotWidgetDto extends AmimsPilotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
