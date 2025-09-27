import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNippbtDto } from './new_bpt.sk_izin_nippbt.dto';

export class NewBptSkIzinNippbtWidgetDto extends NewBptSkIzinNippbtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
