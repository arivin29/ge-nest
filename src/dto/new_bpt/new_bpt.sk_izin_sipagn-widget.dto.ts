import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipagnDto } from './new_bpt.sk_izin_sipagn.dto';

export class NewBptSkIzinSipagnWidgetDto extends NewBptSkIzinSipagnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
