import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIupbDto } from './new_bpt.onl_iupb.dto';

export class NewBptOnlIupbWidgetDto extends NewBptOnlIupbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
