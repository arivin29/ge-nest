import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinKkprDto } from './new_bpt.sk_izin_kkpr.dto';

export class NewBptSkIzinKkprWidgetDto extends NewBptSkIzinKkprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
