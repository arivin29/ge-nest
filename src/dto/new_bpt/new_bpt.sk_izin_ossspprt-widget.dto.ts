import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssspprtDto } from './new_bpt.sk_izin_ossspprt.dto';

export class NewBptSkIzinOssspprtWidgetDto extends NewBptSkIzinOssspprtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
