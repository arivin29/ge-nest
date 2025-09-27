import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNiskpbDto } from './new_bpt.onl_niskpb.dto';

export class NewBptOnlNiskpbWidgetDto extends NewBptOnlNiskpbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
