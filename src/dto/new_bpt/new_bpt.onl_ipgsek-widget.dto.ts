import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpgsekDto } from './new_bpt.onl_ipgsek.dto';

export class NewBptOnlIpgsekWidgetDto extends NewBptOnlIpgsekDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
