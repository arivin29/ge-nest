import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSpamDto } from './new_bpt.onl_spam.dto';

export class NewBptOnlSpamWidgetDto extends NewBptOnlSpamDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
