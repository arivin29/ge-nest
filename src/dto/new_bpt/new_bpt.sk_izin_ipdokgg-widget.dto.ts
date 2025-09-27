import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpdokggDto } from './new_bpt.sk_izin_ipdokgg.dto';

export class NewBptSkIzinIpdokggWidgetDto extends NewBptSkIzinIpdokggDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
