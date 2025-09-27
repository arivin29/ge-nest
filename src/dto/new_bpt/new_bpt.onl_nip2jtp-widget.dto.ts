import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNip2jtpDto } from './new_bpt.onl_nip2jtp.dto';

export class NewBptOnlNip2jtpWidgetDto extends NewBptOnlNip2jtpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
