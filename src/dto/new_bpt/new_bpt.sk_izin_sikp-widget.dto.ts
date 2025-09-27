import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSikpDto } from './new_bpt.sk_izin_sikp.dto';

export class NewBptSkIzinSikpWidgetDto extends NewBptSkIzinSikpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
