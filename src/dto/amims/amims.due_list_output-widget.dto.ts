import { ApiProperty } from '@nestjs/swagger';
import { AmimsDueListOutputDto } from './amims.due_list_output.dto';

export class AmimsDueListOutputWidgetDto extends AmimsDueListOutputDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
