import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptkswastaDto } from './new_bpt.onl_iptkswasta.dto';

export class NewBptOnlIptkswastaWidgetDto extends NewBptOnlIptkswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
