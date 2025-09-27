import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIppohonDto } from './new_bpt.sk_izin_ippohon.dto';

export class NewBptSkIzinIppohonWidgetDto extends NewBptSkIzinIppohonDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
