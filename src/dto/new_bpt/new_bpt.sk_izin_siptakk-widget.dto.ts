import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptakkDto } from './new_bpt.sk_izin_siptakk.dto';

export class NewBptSkIzinSiptakkWidgetDto extends NewBptSkIzinSiptakkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
