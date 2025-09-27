import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsssppirtDto } from './new_bpt.sk_izin_osssppirt.dto';

export class NewBptSkIzinOsssppirtWidgetDto extends NewBptSkIzinOsssppirtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
