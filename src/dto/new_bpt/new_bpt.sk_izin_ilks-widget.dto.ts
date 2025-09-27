import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIlksDto } from './new_bpt.sk_izin_ilks.dto';

export class NewBptSkIzinIlksWidgetDto extends NewBptSkIzinIlksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
