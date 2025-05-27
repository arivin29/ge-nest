import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurGrnDto } from './amims.pur_grn.dto';

export class AmimsPurGrnWidgetDto extends AmimsPurGrnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
