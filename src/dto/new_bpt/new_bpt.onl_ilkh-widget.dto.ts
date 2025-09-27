import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIlkhDto } from './new_bpt.onl_ilkh.dto';

export class NewBptOnlIlkhWidgetDto extends NewBptOnlIlkhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
