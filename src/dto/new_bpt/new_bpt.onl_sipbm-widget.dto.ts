import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipbmDto } from './new_bpt.onl_sipbm.dto';

export class NewBptOnlSipbmWidgetDto extends NewBptOnlSipbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
