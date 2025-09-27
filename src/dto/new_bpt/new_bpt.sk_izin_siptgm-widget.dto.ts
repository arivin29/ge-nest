import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptgmDto } from './new_bpt.sk_izin_siptgm.dto';

export class NewBptSkIzinSiptgmWidgetDto extends NewBptSkIzinSiptgmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
