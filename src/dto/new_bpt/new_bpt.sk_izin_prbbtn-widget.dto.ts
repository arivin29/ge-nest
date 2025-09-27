import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinPrbbtnDto } from './new_bpt.sk_izin_prbbtn.dto';

export class NewBptSkIzinPrbbtnWidgetDto extends NewBptSkIzinPrbbtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
