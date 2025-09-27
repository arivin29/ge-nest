import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinKrkDto } from './new_bpt.sk_izin_krk.dto';

export class NewBptSkIzinKrkWidgetDto extends NewBptSkIzinKrkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
