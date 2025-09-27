import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImbgDto } from './new_bpt.onl_imbg.dto';

export class NewBptOnlImbgWidgetDto extends NewBptOnlImbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
