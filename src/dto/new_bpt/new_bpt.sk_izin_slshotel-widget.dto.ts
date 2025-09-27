import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSlshotelDto } from './new_bpt.sk_izin_slshotel.dto';

export class NewBptSkIzinSlshotelWidgetDto extends NewBptSkIzinSlshotelDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
