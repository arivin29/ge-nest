import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkrDto } from './new_bpt.onl_ikr.dto';

export class NewBptOnlIkrWidgetDto extends NewBptOnlIkrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
