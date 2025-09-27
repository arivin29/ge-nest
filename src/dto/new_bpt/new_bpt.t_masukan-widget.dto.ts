import { ApiProperty } from '@nestjs/swagger';
import { NewBptTMasukanDto } from './new_bpt.t_masukan.dto';

export class NewBptTMasukanWidgetDto extends NewBptTMasukanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
