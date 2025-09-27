import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkrmDto } from './new_bpt.onl_ikrm.dto';

export class NewBptOnlIkrmWidgetDto extends NewBptOnlIkrmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
