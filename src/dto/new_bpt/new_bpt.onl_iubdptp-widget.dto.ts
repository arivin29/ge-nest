import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIubdptpDto } from './new_bpt.onl_iubdptp.dto';

export class NewBptOnlIubdptpWidgetDto extends NewBptOnlIubdptpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
