import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinPkbmDto } from './new_bpt.sk_izin_pkbm.dto';

export class NewBptSkIzinPkbmWidgetDto extends NewBptSkIzinPkbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
