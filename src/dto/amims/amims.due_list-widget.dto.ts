import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListDto } from './amims.due_list.dto';

export class AmimsDueListWidgetDto extends AmimsDueListDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
