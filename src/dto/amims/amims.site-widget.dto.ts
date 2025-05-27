import { ApiProperty } from '@nestjs/swagger';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsSiteWidgetDto extends AmimsSiteDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
