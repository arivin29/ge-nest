import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirlhtpDto } from './new_bpt.onl_nirlhtp.dto';

export class NewBptOnlNirlhtpWidgetDto extends NewBptOnlNirlhtpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
