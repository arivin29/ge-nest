import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirpihDto } from './new_bpt.sk_izin_nirpih.dto';

export class NewBptSkIzinNirpihWidgetDto extends NewBptSkIzinNirpihDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
