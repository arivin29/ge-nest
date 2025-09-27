import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSikbDto } from './new_bpt.sk_izin_sikb.dto';

export class NewBptSkIzinSikbWidgetDto extends NewBptSkIzinSikbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
