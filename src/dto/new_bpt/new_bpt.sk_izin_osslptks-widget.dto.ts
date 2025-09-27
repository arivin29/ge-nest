import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsslptksDto } from './new_bpt.sk_izin_osslptks.dto';

export class NewBptSkIzinOsslptksWidgetDto extends NewBptSkIzinOsslptksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
