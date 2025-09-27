import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipbidanDto } from './new_bpt.onl_sipbidan.dto';

export class NewBptOnlSipbidanWidgetDto extends NewBptOnlSipbidanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
