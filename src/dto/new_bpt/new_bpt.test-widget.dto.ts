import { ApiProperty } from '@nestjs/swagger';
import { NewBptTestDto } from './new_bpt.test.dto';

export class NewBptTestWidgetDto extends NewBptTestDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
