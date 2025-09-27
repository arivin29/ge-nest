import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRpiktDto } from './new_bpt.sk_izin_rpikt.dto';

export class NewBptSkIzinRpiktWidgetDto extends NewBptSkIzinRpiktDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
