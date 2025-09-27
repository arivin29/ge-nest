import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSippkkDto } from './new_bpt.sk_izin_sippkk.dto';

export class NewBptSkIzinSippkkWidgetDto extends NewBptSkIzinSippkkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
