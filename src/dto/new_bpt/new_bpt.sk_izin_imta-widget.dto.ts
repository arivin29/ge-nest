import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinImtaDto } from './new_bpt.sk_izin_imta.dto';

export class NewBptSkIzinImtaWidgetDto extends NewBptSkIzinImtaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
