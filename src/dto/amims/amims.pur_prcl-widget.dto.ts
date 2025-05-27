import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrclDto } from './amims.pur_prcl.dto';

export class AmimsPurPrclWidgetDto extends AmimsPurPrclDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
