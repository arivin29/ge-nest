import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinPbgDto } from './new_bpt.sk_izin_pbg.dto';

export class NewBptSkIzinPbgWidgetDto extends NewBptSkIzinPbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
