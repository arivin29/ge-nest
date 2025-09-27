import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlLpksDto } from './new_bpt.onl_lpks.dto';

export class NewBptOnlLpksWidgetDto extends NewBptOnlLpksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
