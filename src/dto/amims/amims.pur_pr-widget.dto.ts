import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrDto } from './amims.pur_pr.dto';

export class AmimsPurPrWidgetDto extends AmimsPurPrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
