import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsstdgDto } from './new_bpt.sk_izin_osstdg.dto';

export class NewBptSkIzinOsstdgWidgetDto extends NewBptSkIzinOsstdgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
