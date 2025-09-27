import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupwtDto } from './new_bpt.sk_izin_tdupwt.dto';

export class NewBptSkIzinTdupwtWidgetDto extends NewBptSkIzinTdupwtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
