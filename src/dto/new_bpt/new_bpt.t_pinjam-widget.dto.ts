import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPinjamDto } from './new_bpt.t_pinjam.dto';

export class NewBptTPinjamWidgetDto extends NewBptTPinjamDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
