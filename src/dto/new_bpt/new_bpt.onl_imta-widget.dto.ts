import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImtaDto } from './new_bpt.onl_imta.dto';

export class NewBptOnlImtaWidgetDto extends NewBptOnlImtaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
