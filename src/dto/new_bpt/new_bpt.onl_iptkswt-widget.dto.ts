import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptkswtDto } from './new_bpt.onl_iptkswt.dto';

export class NewBptOnlIptkswtWidgetDto extends NewBptOnlIptkswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
