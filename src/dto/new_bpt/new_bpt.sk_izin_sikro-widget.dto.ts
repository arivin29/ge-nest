import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSikroDto } from './new_bpt.sk_izin_sikro.dto';

export class NewBptSkIzinSikroWidgetDto extends NewBptSkIzinSikroDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
