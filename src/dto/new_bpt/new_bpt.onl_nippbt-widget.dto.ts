import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippbtDto } from './new_bpt.onl_nippbt.dto';

export class NewBptOnlNippbtWidgetDto extends NewBptOnlNippbtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
