import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIlkpDto } from './new_bpt.onl_ilkp.dto';

export class NewBptOnlIlkpWidgetDto extends NewBptOnlIlkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
