import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirmhtnDto } from './new_bpt.onl_nirmhtn.dto';

export class NewBptOnlNirmhtnWidgetDto extends NewBptOnlNirmhtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
