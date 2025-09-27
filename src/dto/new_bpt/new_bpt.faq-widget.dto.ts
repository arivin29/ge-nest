import { ApiProperty } from '@nestjs/swagger';
import { NewBptFaqDto } from './new_bpt.faq.dto';

export class NewBptFaqWidgetDto extends NewBptFaqDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
