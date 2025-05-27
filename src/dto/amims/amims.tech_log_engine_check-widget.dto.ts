import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogEngineCheckDto } from './amims.tech_log_engine_check.dto';

export class AmimsTechLogEngineCheckWidgetDto extends AmimsTechLogEngineCheckDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
