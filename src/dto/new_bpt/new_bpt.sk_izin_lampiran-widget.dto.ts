import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinLampiranDto } from './new_bpt.sk_izin_lampiran.dto';

export class NewBptSkIzinLampiranWidgetDto extends NewBptSkIzinLampiranDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
