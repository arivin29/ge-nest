import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirikhDto } from './new_bpt.sk_izin_nirikh.dto';

export class NewBptSkIzinNirikhWidgetDto extends NewBptSkIzinNirikhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
