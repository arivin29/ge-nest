import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiorswastaDto } from './new_bpt.sk_izin_ossiorswasta.dto';

export class NewBptSkIzinOssiorswastaWidgetDto extends NewBptSkIzinOssiorswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
