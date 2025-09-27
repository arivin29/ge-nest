import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinDamijaDto } from './new_bpt.sk_izin_damija.dto';

export class NewBptSkIzinDamijaWidgetDto extends NewBptSkIzinDamijaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
