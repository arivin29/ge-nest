import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkkeDto } from './new_bpt.onl_ikke.dto';

export class NewBptOnlIkkeWidgetDto extends NewBptOnlIkkeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
