import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRnkvDto } from './new_bpt.sk_izin_rnkv.dto';

export class NewBptSkIzinRnkvWidgetDto extends NewBptSkIzinRnkvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
