import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipdhDto } from './new_bpt.sk_izin_sipdh.dto';

export class NewBptSkIzinSipdhWidgetDto extends NewBptSkIzinSipdhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
