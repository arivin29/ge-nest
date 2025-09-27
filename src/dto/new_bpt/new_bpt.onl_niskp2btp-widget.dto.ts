import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNiskp2btpDto } from './new_bpt.onl_niskp2btp.dto';

export class NewBptOnlNiskp2btpWidgetDto extends NewBptOnlNiskp2btpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
