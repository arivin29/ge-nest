import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiportopDto } from './new_bpt.sk_izin_siportop.dto';

export class NewBptSkIzinSiportopWidgetDto extends NewBptSkIzinSiportopDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
