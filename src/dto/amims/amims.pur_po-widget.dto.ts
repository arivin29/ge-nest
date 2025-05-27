import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPoDto } from './amims.pur_po.dto';

export class AmimsPurPoWidgetDto extends AmimsPurPoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
