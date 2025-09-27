import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIaDto } from './new_bpt.sk_izin_ia.dto';

export class NewBptSkIzinIaWidgetDto extends NewBptSkIzinIaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
