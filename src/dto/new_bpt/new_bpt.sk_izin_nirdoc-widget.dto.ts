import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirdocDto } from './new_bpt.sk_izin_nirdoc.dto';

export class NewBptSkIzinNirdocWidgetDto extends NewBptSkIzinNirdocDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
