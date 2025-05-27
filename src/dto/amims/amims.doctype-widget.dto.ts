import { ApiProperty } from '@nestjs/swagger';
import { AmimsDoctypeDto } from './amims.doctype.dto';

export class AmimsDoctypeWidgetDto extends AmimsDoctypeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
