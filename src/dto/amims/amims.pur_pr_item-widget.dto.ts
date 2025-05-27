import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrItemDto } from './amims.pur_pr_item.dto';

export class AmimsPurPrItemWidgetDto extends AmimsPurPrItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
