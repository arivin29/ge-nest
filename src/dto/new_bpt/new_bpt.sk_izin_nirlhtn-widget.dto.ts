import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirlhtnDto } from './new_bpt.sk_izin_nirlhtn.dto';

export class NewBptSkIzinNirlhtnWidgetDto extends NewBptSkIzinNirlhtnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
