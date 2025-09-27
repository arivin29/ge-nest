import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkrgDto } from './new_bpt.sk_izin_ikrg.dto';

export class NewBptSkIzinIkrgWidgetDto extends NewBptSkIzinIkrgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
