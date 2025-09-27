import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlItptkiDto } from './new_bpt.onl_itptki.dto';

export class NewBptOnlItptkiWidgetDto extends NewBptOnlItptkiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
