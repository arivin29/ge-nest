import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirmhtnDto } from './new_bpt.sk_izin_nirmhtn.dto';

export class NewBptSkIzinNirmhtnWidgetDto extends NewBptSkIzinNirmhtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
