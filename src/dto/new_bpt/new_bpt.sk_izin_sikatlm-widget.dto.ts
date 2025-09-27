import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSikatlmDto } from './new_bpt.sk_izin_sikatlm.dto';

export class NewBptSkIzinSikatlmWidgetDto extends NewBptSkIzinSikatlmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
