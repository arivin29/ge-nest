import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIujkDto } from './new_bpt.onl_iujk.dto';

export class NewBptOnlIujkWidgetDto extends NewBptOnlIujkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
