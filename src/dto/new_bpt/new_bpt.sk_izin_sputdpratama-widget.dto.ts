import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSputdpratamaDto } from './new_bpt.sk_izin_sputdpratama.dto';

export class NewBptSkIzinSputdpratamaWidgetDto extends NewBptSkIzinSputdpratamaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
