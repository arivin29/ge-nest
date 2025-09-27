import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsspubdhDto } from './new_bpt.sk_izin_osspubdh.dto';

export class NewBptSkIzinOsspubdhWidgetDto extends NewBptSkIzinOsspubdhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
