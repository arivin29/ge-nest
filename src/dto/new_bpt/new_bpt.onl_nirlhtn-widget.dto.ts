import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirlhtnDto } from './new_bpt.onl_nirlhtn.dto';

export class NewBptOnlNirlhtnWidgetDto extends NewBptOnlNirlhtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
