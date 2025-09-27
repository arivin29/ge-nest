import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirp3hguDto } from './new_bpt.onl_nirp3hgu.dto';

export class NewBptOnlNirp3hguWidgetDto extends NewBptOnlNirp3hguDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
