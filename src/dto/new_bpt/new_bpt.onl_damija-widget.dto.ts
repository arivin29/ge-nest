import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlDamijaDto } from './new_bpt.onl_damija.dto';

export class NewBptOnlDamijaWidgetDto extends NewBptOnlDamijaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
