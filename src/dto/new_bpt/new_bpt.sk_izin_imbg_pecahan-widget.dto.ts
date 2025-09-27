import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinImbgPecahanDto } from './new_bpt.sk_izin_imbg_pecahan.dto';

export class NewBptSkIzinImbgPecahanWidgetDto extends NewBptSkIzinImbgPecahanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
