import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIoDto } from './new_bpt.sk_izin_io.dto';

export class NewBptSkIzinIoWidgetDto extends NewBptSkIzinIoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
