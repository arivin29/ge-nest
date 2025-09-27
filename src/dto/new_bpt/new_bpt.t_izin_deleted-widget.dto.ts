import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinDeletedDto } from './new_bpt.t_izin_deleted.dto';

export class NewBptTIzinDeletedWidgetDto extends NewBptTIzinDeletedDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
