import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpmkmDto } from './new_bpt.sk_izin_ipmkm.dto';

export class NewBptSkIzinIpmkmWidgetDto extends NewBptSkIzinIpmkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
