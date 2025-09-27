import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNip2kpkDto } from './new_bpt.onl_nip2kpk.dto';

export class NewBptOnlNip2kpkWidgetDto extends NewBptOnlNip2kpkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
