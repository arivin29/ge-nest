import { ApiProperty } from '@nestjs/swagger';
import { AmimsVDueListOutputDto } from './amims.v_due_list_output.dto';

export class AmimsVDueListOutputWidgetDto extends AmimsVDueListOutputDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
