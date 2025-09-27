import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpdokggspDto } from './new_bpt.sk_izin_ipdokggsp.dto';

export class NewBptSkIzinIpdokggspWidgetDto extends NewBptSkIzinIpdokggspDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
