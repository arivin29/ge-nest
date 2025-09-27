import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSlskantinDto } from './new_bpt.sk_izin_slskantin.dto';

export class NewBptSkIzinSlskantinWidgetDto extends NewBptSkIzinSlskantinDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
