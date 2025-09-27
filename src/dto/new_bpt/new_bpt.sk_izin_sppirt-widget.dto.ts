import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSppirtDto } from './new_bpt.sk_izin_sppirt.dto';

export class NewBptSkIzinSppirtWidgetDto extends NewBptSkIzinSppirtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
