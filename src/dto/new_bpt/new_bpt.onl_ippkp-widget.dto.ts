import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIppkpDto } from './new_bpt.onl_ippkp.dto';

export class NewBptOnlIppkpWidgetDto extends NewBptOnlIppkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
