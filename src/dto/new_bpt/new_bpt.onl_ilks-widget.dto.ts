import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIlksDto } from './new_bpt.onl_ilks.dto';

export class NewBptOnlIlksWidgetDto extends NewBptOnlIlksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
