import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssslfbgDto } from './new_bpt.sk_izin_ossslfbg.dto';

export class NewBptSkIzinOssslfbgWidgetDto extends NewBptSkIzinOssslfbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
