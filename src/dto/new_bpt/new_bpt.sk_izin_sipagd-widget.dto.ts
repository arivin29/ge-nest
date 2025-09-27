import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipagdDto } from './new_bpt.sk_izin_sipagd.dto';

export class NewBptSkIzinSipagdWidgetDto extends NewBptSkIzinSipagdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
