import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIprgDto } from './new_bpt.onl_iprg.dto';

export class NewBptOnlIprgWidgetDto extends NewBptOnlIprgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
