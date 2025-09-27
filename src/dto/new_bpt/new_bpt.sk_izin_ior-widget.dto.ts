import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIorDto } from './new_bpt.sk_izin_ior.dto';

export class NewBptSkIzinIorWidgetDto extends NewBptSkIzinIorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
