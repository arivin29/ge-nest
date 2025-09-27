import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSputdmadyaDto } from './new_bpt.sk_izin_sputdmadya.dto';

export class NewBptSkIzinSputdmadyaWidgetDto extends NewBptSkIzinSputdmadyaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
