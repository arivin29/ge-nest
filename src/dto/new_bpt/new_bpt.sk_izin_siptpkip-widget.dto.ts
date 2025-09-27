import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptpkipDto } from './new_bpt.sk_izin_siptpkip.dto';

export class NewBptSkIzinSiptpkipWidgetDto extends NewBptSkIzinSiptpkipDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
