import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogEngineDto } from './amims.tech_log_engine.dto';

export class AmimsTechLogEngineWidgetDto extends AmimsTechLogEngineDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
