import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpdokDto } from './new_bpt.sk_izin_ipdok.dto';

export class NewBptSkIzinIpdokWidgetDto extends NewBptSkIzinIpdokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
