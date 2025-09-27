import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinChatDto } from './new_bpt.t_izin_chat.dto';

export class NewBptTIzinChatWidgetDto extends NewBptTIzinChatDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
