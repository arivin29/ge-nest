import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipttkDto } from './new_bpt.sk_izin_sipttk.dto';

export class NewBptSkIzinSipttkWidgetDto extends NewBptSkIzinSipttkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
