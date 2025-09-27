import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinImbgDto } from './new_bpt.sk_izin_imbg.dto';

export class NewBptSkIzinImbgWidgetDto extends NewBptSkIzinImbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
