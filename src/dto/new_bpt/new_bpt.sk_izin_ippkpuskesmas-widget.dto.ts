import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIppkpuskesmasDto } from './new_bpt.sk_izin_ippkpuskesmas.dto';

export class NewBptSkIzinIppkpuskesmasWidgetDto extends NewBptSkIzinIppkpuskesmasDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
