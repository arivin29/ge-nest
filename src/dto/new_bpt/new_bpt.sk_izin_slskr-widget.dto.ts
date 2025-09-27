import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSlskrDto } from './new_bpt.sk_izin_slskr.dto';

export class NewBptSkIzinSlskrWidgetDto extends NewBptSkIzinSlskrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
