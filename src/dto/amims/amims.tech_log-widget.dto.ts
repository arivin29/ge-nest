import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechLogDto } from './amims.tech_log.dto';

export class AmimsTechLogWidgetDto extends AmimsTechLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
