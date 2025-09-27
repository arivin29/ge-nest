import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinLogDto } from './new_bpt.t_izin_log.dto';

export class NewBptTIzinLogWidgetDto extends NewBptTIzinLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
