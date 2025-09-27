import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsspuperkebunanDto } from './new_bpt.sk_izin_osspuperkebunan.dto';

export class NewBptSkIzinOsspuperkebunanWidgetDto extends NewBptSkIzinOsspuperkebunanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
