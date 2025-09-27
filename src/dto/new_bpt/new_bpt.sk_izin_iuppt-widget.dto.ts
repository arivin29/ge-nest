import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIupptDto } from './new_bpt.sk_izin_iuppt.dto';

export class NewBptSkIzinIupptWidgetDto extends NewBptSkIzinIupptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
