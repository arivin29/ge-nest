import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImcbDto } from './new_bpt.onl_imcb.dto';

export class NewBptOnlImcbWidgetDto extends NewBptOnlImcbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
