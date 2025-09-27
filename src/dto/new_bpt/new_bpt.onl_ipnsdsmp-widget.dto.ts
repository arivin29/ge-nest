import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpnsdsmpDto } from './new_bpt.onl_ipnsdsmp.dto';

export class NewBptOnlIpnsdsmpWidgetDto extends NewBptOnlIpnsdsmpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
