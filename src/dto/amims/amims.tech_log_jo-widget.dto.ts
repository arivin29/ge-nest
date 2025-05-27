import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogJoDto } from './amims.tech_log_jo.dto';

export class AmimsTechLogJoWidgetDto extends AmimsTechLogJoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
