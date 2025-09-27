import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinImkDto } from './new_bpt.sk_izin_imk.dto';

export class NewBptSkIzinImkWidgetDto extends NewBptSkIzinImkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
