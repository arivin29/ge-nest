import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiupDto } from './new_bpt.sk_izin_siup.dto';

export class NewBptSkIzinSiupWidgetDto extends NewBptSkIzinSiupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
