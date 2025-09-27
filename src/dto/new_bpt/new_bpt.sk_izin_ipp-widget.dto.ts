import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIppDto } from './new_bpt.sk_izin_ipp.dto';

export class NewBptSkIzinIppWidgetDto extends NewBptSkIzinIppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
