import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkkeDto } from './new_bpt.sk_izin_ikke.dto';

export class NewBptSkIzinIkkeWidgetDto extends NewBptSkIzinIkkeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
