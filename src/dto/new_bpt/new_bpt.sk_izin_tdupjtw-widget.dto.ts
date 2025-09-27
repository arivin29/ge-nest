import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupjtwDto } from './new_bpt.sk_izin_tdupjtw.dto';

export class NewBptSkIzinTdupjtwWidgetDto extends NewBptSkIzinTdupjtwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
