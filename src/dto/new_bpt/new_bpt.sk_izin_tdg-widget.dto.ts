import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdgDto } from './new_bpt.sk_izin_tdg.dto';

export class NewBptSkIzinTdgWidgetDto extends NewBptSkIzinTdgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
