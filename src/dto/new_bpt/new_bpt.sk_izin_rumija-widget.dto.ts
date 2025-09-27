import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRumijaDto } from './new_bpt.sk_izin_rumija.dto';

export class NewBptSkIzinRumijaWidgetDto extends NewBptSkIzinRumijaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
