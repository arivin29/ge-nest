import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIsalonDto } from './new_bpt.onl_isalon.dto';

export class NewBptOnlIsalonWidgetDto extends NewBptOnlIsalonDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
