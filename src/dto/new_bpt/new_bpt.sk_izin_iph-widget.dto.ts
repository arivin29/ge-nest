import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIphDto } from './new_bpt.sk_izin_iph.dto';

export class NewBptSkIzinIphWidgetDto extends NewBptSkIzinIphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
